import React, { useEffect, useState } from 'react';
import '../Styles/Counter.css'; // Create this CSS file for styles
import { PiStudentFill } from "react-icons/pi";
import { BiSolidSchool } from "react-icons/bi";
import { IoHappyOutline } from "react-icons/io5";
const Counter = () => {
  const [countStarted, setCountStarted] = useState(false);
  const [studentsCount, setStudentsCount] = useState(0);
  const [batchesCount, setBatchesCount] = useState(0);

  // Logic for the countdown effect
  useEffect(() => {
    const countUp = (target, setter) => {
      let start = 0;
      const interval = setInterval(() => {
        if (start < target) {
          start++;
          setter(start);
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust the speed of counting
    };

    if (countStarted) {
      countUp(50, setStudentsCount);  // Example count for students
      countUp(15, setBatchesCount);      // Example count for batches
    }
  }, [countStarted]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCountStarted(true);
        }
      });
    }, { threshold: 0.5 });

    const section = document.querySelector('.counter-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="counter-section">
      <div className="counter-item">
      <PiStudentFill className='count-icon'/>
        <div className="counter-text">
          <h2>{studentsCount}</h2>
          <p>Students Enrolled</p>
        </div>
      </div>
      <div className="counter-item">
      <BiSolidSchool className='count-icon'/>
        <div className="counter-text">
          <h2>2021</h2>
          <p>Since</p>
        </div>
      </div>
      <div className="counter-item">
      <IoHappyOutline className='count-icon'/>
        <div className="counter-text">
          <h2>{batchesCount}</h2>
          <p>Succesful Batches</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
