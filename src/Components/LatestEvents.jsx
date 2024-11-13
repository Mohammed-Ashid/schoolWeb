import React from 'react';
import '../Styles/LatestEvents.css';

function LatestEvents() {
  const events = [
    { title: "Cultural Fest", image: "path/to/cultural-fest.jpg", description: "Join us for an evening of music, dance, and art!" },
    { title: "Hackathon", image: "path/to/hackathon.jpg", description: "Compete in a 24-hour hackathon and solve real-world problems." },
    { title: "Science Fair", image: "path/to/science-fair.jpg", description: "Showcase your innovative science projects at our annual fair." },
    { title: "Art Exhibition", image: "path/to/art-exhibition.jpg", description: "Explore artwork by talented students and local artists." },
    { title: "Coding Bootcamp", image: "path/to/coding-bootcamp.jpg", description: "Improve your coding skills with hands-on workshops." }
  ];

  return (
    <div className='events-main-div'>
      <div className='events-title'>LATEST EVENTS</div>
      <div className='events-content'>
        {events.map((event, index) => (
          <div key={index} className='event-item'>
            <div className='event-front' style={{ backgroundImage: `url(${event.image})` }}>
              <h4 className='event-title'>{event.title}</h4>
            </div>
            <div className='event-back'>
              <p className='event-description'>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestEvents;
