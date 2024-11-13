import React from 'react';
import '../Styles/Announcements.css';

function Announcements() {
  const announcements = [
    "New AI, ML, and ERP courses starting soon!",
    "Join our upcoming hackathon and win exciting prizes!",
    "Guest lecture by industry experts next week!",
    "Exam registration deadlines are approaching—don't miss out!",
    "Sign up for our weekly coding workshops to improve your skills."
  ];

  return (
    <div className='announcements-main-div'>
        <div className='announ-heading'>Announcements</div>
        <div className='announ-content'>
          <ul>
            {announcements.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default Announcements;
