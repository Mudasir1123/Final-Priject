import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import twitterImage from '../images/twitter.png'; // Import the Twitter image
import Style from './RightPanel.module.css'
function RightPanel() {
  return (
    <>

      <div className={Style.main}>
        <div className={Style.follow} >
          <h3>Who to follow</h3>
          <div>
            <Button className={Style.button} >Refresh</Button>
          </div>
          <Button className={Style.button} >View all</Button>
        </div>
        <div>
          {/* Suggested accounts */}
          <div className="d-flex align-items-center my-3">
            <Image src={twitterImage} alt="Twitter" style={{ width: '90px', height: '90px', marginRight: '10px' }} />
            <div>
              <h5>Mohammad Malik</h5>
              <p>@malik</p>
              <Button className={Style.button1}>Follow</Button>
            </div>
          </div>
          <div className="d-flex align-items-center my-3">
            <Image src={twitterImage} alt="Twitter" style={{ width: '90px', height: '90px', marginRight: '10px' }} />
            <div>
              <h5>Yasir Chauhdry</h5>
              <p>@chauhdry</p>
              <Button className={Style.button1}>Follow</Button>
            </div>
          </div>
          <div className="d-flex align-items-center my-3">
            <Image src={twitterImage} alt="Twitter" style={{ width: '90px', height: '90px', marginRight: '10px' }} />
            <div>
              <h5>John Smith</h5>
              <p>@smith</p>
              <Button className={Style.button1}>Follow</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightPanel;
