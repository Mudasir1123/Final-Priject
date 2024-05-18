// ProfileStats.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from './ProfileStatus.module.css'
import Twitter from './Twitter';

function ProfileStats({tweetCount}) {
  const [stats, setStats] = useState({
    tweets: 0,
    following: 328,
    followers: 154,
    likes: 66
  });

  useEffect(() => {
    // Fetch tweet statistics from backend API
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/stats'); // Assuming you have a /api/stats endpoint to fetch statistics
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <>
   
    {/* <Twitter /> */}
      <div className='d-flex  n1: -1 position-relative'>
          <div className='col-4'></div>
          <div className="col-6">
            <div className='row'>
              <div className='col-md-3'>
                <h4>Tweets</h4>
                <p className={Style.tweets}>{tweetCount}</p>
              </div>
              <div className='col-md-3'>
                <h4>Following</h4>
                <p className={Style.tweets}>{stats.following}</p>
              </div>
              <div className='col-md-3'>
                <h4>Followers</h4>
                <p className={Style.tweets}>{stats.followers}</p>
              </div>
              <div className='col-md-3'>
                <h4>Likes</h4>
                <p className={Style.tweets}>{stats.likes}</p>
              </div>
            </div>
          </div>
          <div className='col-2'></div>
      </div>

    </>
  );
}

export default ProfileStats;
