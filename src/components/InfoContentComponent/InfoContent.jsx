import './InfoContent.css';
import React from 'react';

const InfoContent = ({background, user}) => {

  return (
    <div className='InfoContent'>
        <figure className='img-profile-container' style={{background}}>
            <img 
            src={user.picture.large}
            alt={`${user.name.title} ${user.name.first} ${user.name.last} profile`} 
            className='img-profile'
            />
        </figure>
        <h2 className='username'>{user.name.title} {user.name.first} {user.name.last}</h2>
        <div className="icon-contact">
            <i className="fa-solid fa-phone phone"></i>
            <i className="fa-solid fa-envelope email"></i>
        </div>
        <hr className='hr' />
        <section className='overview'>
            <h3 className='subtitle'>OVERVIEW</h3>
            <div className='contact'>
                <h3 className='subtitle subtitle-overview'>PHONE</h3>
                <p className='contact-info'>{user.phone}</p>
                <i className="fa-solid fa-phone phone phone-contact"></i>
            </div>
            <div className='contact'>
                <h3 className='subtitle subtitle-overview'>EMAIL</h3>
                <p className='contact-info'>{user.email}</p>
                <i className="fa-solid fa-envelope email email-contact"></i>
            </div>
        </section>
    </div>
  );

}

export default InfoContent;
