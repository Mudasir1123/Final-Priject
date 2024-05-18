import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import twitterImage from '../images/twitter.png'; // Import the Twitter image
import Style from './NewTweet.module.css';
import TweetCard from './TweetCard'; // Corrected import path
import axios from 'axios';
import ProfileStats from './ProfileStats';

function NewTweet({ sethasTweeted }) {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the server to create a new tweet
      await axios.post('/api/tweets', { content });

      // Clear the input field after successfully submitting the tweet
      setContent('');
      sethasTweeted(true);
    } catch (error) {
      console.error('Error creating tweet:', error);
    }
  };

  const [hasTweeted, setHasTweeted] = useState(false);
  const [tweetCount, settweetCount] = useState(0);

  // Function to get the current date in the format "Month Year"
  const getCurrentDate = () => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' }); // Get the month name
    const year = currentDate.getFullYear(); // Get the year
    return `${month} ${year}`;
  };

  // Concatenate the username and current date
  const userNameWithDate = `@hanif - ${getCurrentDate()}`;

  return (
    <>
    {/* <ProfileStats tweetCount={tweetCount} /> */}
      <div>
        <div className={Style.tweet1}>
          <Image style={{ width: '80px', height: '80px' }} src={twitterImage} fluid />
          <form onSubmit={handleSubmit}>
            <textarea
              className='form-control'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening?"
              rows={4}
              cols={48}
              required
            />
            <div>
              <Button className={Style.button} variant="primary" type="submit">
                Tweet
              </Button>
            </div>
          </form>
        </div >
      </div>
      <TweetCard settweetCount={settweetCount} sethasTweeted={setHasTweeted} hasTweeted={hasTweeted} userAvatar={twitterImage} userName={userNameWithDate} />
    </>
  );
}

export default NewTweet;
