import React from 'react';
import '../../assets/styles/bootstrap.css';


export default function Home() {
  function Card() {
    return (
      <div className="justify-content-center align-items-center card text-white bg-secondary mb-3" style={{ width: '40rem' }}>
        <div className="card-header">ABOUT ME</div>
        <div className="card-body">
          <h4 className="card-title">Hi, I'm Rose!</h4>
          <p className="card-text">HE</p>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <Card />
    </div>
  );
}






