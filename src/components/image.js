import React from 'react';
import Style from './Twitter.module.css'
import twitter from '../images/twitter.png'; // Import the twitter image
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

export default function Pimage() {
    return (


        <MDBRow className="justify-content-center align-items-center ">
            <MDBCol lg="9" xl="7">
                            <MDBCardImage src={twitter}
                                alt="Generic placeholder image" className={Style.image} fluid style={{ width: '150px', zIndex: '1' }} />
                        
            </MDBCol>
        </MDBRow>
    );
}