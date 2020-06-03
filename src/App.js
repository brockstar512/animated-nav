import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
      <NavItem icon ="A"/>
      <NavItem icon ="B"/>
      <NavItem icon ="C"/>
      </Navbar>
    </div>
  );
}

function Navbar(props){
  return(
    <nav className = "navbar">
      <ul className= "navbar-nav">{props.children}</ul>
    </nav>
  )
}

function NavItem(props){
  return (<li className = "nav-item">
    <a href="#" className="icon-button">
      {props.icon}
      </a>
      </li>)
}

export default App;
