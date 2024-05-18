import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'; // Import renamed component
import ProfileCover from './components/ProfileCover';
import ProfileStats from './components/ProfileStats';
import ProfileInfo from './components/ProfileInfo';
import NewTweet from './components/NewTweet';
import TweetCard from './components/TweetCard';
import RightPanel from './components/RightPanel';
import { Col, Container, Row } from 'react-bootstrap';
import Twitter from './components/Twitter';

function App() {
  const [hasTweeted,setHasTweeted]= useState(false)
  const [tweetCount,settweetCount]= useState(0)

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
      <Navbar/> 
      <ProfileCover/>
      <Container fluid>
      <Row>
          <Col style={{ border: '2px solid #1DA1F2' }}>
          <ProfileStats tweetCount={tweetCount} />

          </Col>
        </Row>
        <Row >
          <Col md={4} style={{ border: '1px solid #1DA1F2' }}><ProfileInfo /></Col>
          <Col md={4} style={{ border: '1px solid #1DA1F2' }}>
            <NewTweet sethasTweeted={setHasTweeted} />
            </Col>
          <Col md={4} style={{ border: '1px solid #1DA1F2' }}><RightPanel /></Col>
        </Row>
      <TweetCard settweetCount={settweetCount} sethasTweeted={setHasTweeted} hasTweeted={hasTweeted} userAvatar={require('./images/twitter.png')} userName={userNameWithDate} /> 
      </Container>
    </> 
  );
}

export default App;
