// src/App.js
import React from 'react';
import './App.css';
import InstructorCard from './components/InstructorCard';
import logo from './images/logo.png'; // Import the logo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" /> {/* Add logo */}
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/internships">Internships</a></li>
            <li><a href="/mock-tests">Mock Tests</a></li>
            <li><a href="/learning">Learning</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
        <button className="get-started">Get Started</button>
      </header>
      <main className="App-main">
        <h2>Our Instructors</h2>
        <p>Learn from Our Experienced and Dedicated Instructors.</p>
        <InstructorCard />
      </main>
    </div>
  );
}

export default App;
