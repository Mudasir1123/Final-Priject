import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Style from './TweetCard.module.css'


function TweetCard({ sethasTweeted, hasTweeted, settweetCount, userAvatar, userName }) {
    const [tweets, setTweets] = useState();

    useEffect(() => {
        // Fetch tweets from the backend API
        const fetchTweets = async () => {
            try {
                const response = await axios.get('/api/tweets');
                console.log("Data Receiving", response.data)
                setTweets(response.data.tweets);
                settweetCount(response.data.tweetCount) // Ensure the correct data structure is used
            } catch (error) {
                console.error('Error fetching tweets:', error);
            }
        };

        fetchTweets();
        sethasTweeted(false)
    }, [hasTweeted]);

    const handleDelete = async (tweetId) => {
        console.log('Deleting tweet with ID:', tweetId);
        try {
            // Send a DELETE request to the server to delete the tweet
            const response = await axios.delete(`/api/tweets/${tweetId}`);
            console.log('Delete response:', response.data); // Log the response from the server

            // Remove the deleted tweet from the state
            setTweets(tweets.filter(tweet => tweet._id !== tweetId));
        } catch (error) {
            console.error('Error deleting tweet:', error);
        }
    };


    return (
        <>
            <div className={Style.tweet}>
                {tweets && tweets.length > 0 ? (
                    tweets.map(tweet => (
                        <div key={tweet._id} className="tweet">
                            <div className={Style.username}>
                                <Image src={userAvatar} alt="User Avatar" roundedCircle style={{ width: '80px', height: '80px' }} />
                                <div className={Style.main}>
                                    <span className={Style.name}>
                                        <h3>Malik Adil {userName}</h3>
                                    </span>
                                    <p>{tweet.content}</p>
                                </div>
                            </div>
                            <div className={Style.main1}>
                                <button className={Style.button} onClick={() => handleDelete(tweet._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No tweets to show</p>
                )}
            </div>

        </>
    );
}
export default TweetCard;
