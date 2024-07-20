import React from 'react';
import Landing from '../../components/Landing';
import background from '../../assets/contact_Group-18373.jpg'
const Contact = () => {
    return (
        <div className='contact page'>
            <Landing background={background} heading={"Contact Us"} desc={"For Any Business Queries Ring Us"}/>
        </div>
    );
}

export default Contact;
