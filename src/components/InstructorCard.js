import React from 'react';
import './InstructorCard.css';
import profileImage from '../images/profile.png';

const InstructorCard = () => {
  return (
    <div className="instructor-card">
      <img src={profileImage} alt="Instructor" className="profile-image" />
      <div className="instructor-info">
        <h3>Instructor Name</h3>
        <p>Post Instructor @tnpofficer</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies velit vel mi feugiat, ac feugiat eros suscipit. Vivamus nec dictum risus. Sed sit amet eros a felis luctus facilisis. Integer at urna in nunc vehicula placerat sed quis nulla.</p>
      </div>
      <div className="arrows">
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </div>
  );
}

export default InstructorCard;
