import React from 'react';
import '../Styles/LatestNews.css';

function LatestNews() {
  const newsItems = [
    { title: "New AI Course Launched", description: "Join our new AI course and enhance your skills with hands-on projects and expert guidance." },
    { title: "Tech Conference 2024", description: "Our institution will be participating in Tech Conference 2024. Don't miss the networking opportunities." },
    { title: "Summer Bootcamp", description: "Enroll in our summer bootcamp to fast-track your career in software development and data science." },
    { title: "Placement Opportunities", description: "Several top companies are conducting placement drives on campus. Prepare to secure your dream job!" },
    { title: "Web Development Workshop", description: "Join our free web development workshop to learn the latest in front-end and back-end technologies." },
    { title: "Data Science Seminar", description: "Learn about the latest trends in data science from industry experts in our upcoming seminar." },
    
  ];

  return (
    <div className='latest-main-div'>
      <div className='latest-title'>LATEST NEWS</div>
      <div className='main-news'>
        <div className='main-news-image'></div>
        <div className='main-news-summary'><h3>Todays</h3><p>Dummy details</p></div>
      </div>
      <div className='latest-content'>
        {newsItems.map((item, index) => (
          <div key={index} className='news-item'>
            <h4 className='news-title'>{item.title}</h4>
            <p className='news-description'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestNews;
