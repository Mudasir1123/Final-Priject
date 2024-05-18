import React from 'react';
import Button from 'react-bootstrap/Button';
import Style from './ProfileInfo.module.css'
function ProfileInfo() {
  return (
    <div className={Style.info}> 
      <h2>Mohammad Adil Jan Malik</h2>
      <p>@21320394</p>
      <p>Perth, WA</p>
      <p>Joined May 16, 2024</p>
      <Button className={Style.button}>Tweet to Malik Adil</Button>
    </div>
  );
}

export default ProfileInfo;
