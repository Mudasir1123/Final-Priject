import twitter from '../images/twitter.png'; // Import the twitter image
import Image from 'react-bootstrap/Image'; // Import Image from react-bootstrap
import Style from "./Twitter.module.css"
import { MDBCard, MDBCardImage } from 'mdb-react-ui-kit';

function Twitter() {
    return (
        <>
                <MDBCardImage className={Style.twitter} style={{ width: '310px', height: 'auto'}}
                    src={twitter} />
        </>
    );
}

export default Twitter;
