import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

function Home() {
  return (
    <div className="Home">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React client for authentification restful microservice</p>
      </header>
    </div>
  );
}

export default Home;
