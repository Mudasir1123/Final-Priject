import React from 'react';
import Image from 'react-bootstrap/Image'; // Import Image from react-bootstrap
import coverphoto from '../images/coverphoto.jpg'; // Import the cover photo image
import Style from './ProfileCover.module.css'
import Pimage from './image';
import Twitter from './Twitter';

function ProfileCover() {
  return (
    <>
      <Image className={Style.coverphoto} src={coverphoto} 
       fluid style={{ width: '100%', height: 'auto' }} />
{/* <Pimage/> */}
<Twitter/>
    </>
  );
}

export default ProfileCover;
