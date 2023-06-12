import React from 'react';
import '../../assets/styles/bootstrap.css';

export default function Resume() {
  return (
    <div  style={{ margin:"40px",width:'max-width', height:'fit-content' }}>
      <h1>Resume</h1>
      <p>
      <a href="../../assets/misc/Rose-Cassidy-Resume.docx" download="Rose Cassidy Resume.pdf">Download my resume</a>
      </p>
      <h2>Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}