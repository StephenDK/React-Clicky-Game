// Import react
import React from 'react';
// import css styles
import './navbar.css';

const Navbar = (props) => (
   <div className='navbar navbar-default'>
        <div className='container-fluid navbar-custom'>
            <a className='navbar-brand' href='/'>Clicky Game</a>
            <h3 className='score'>Score: {props.score} Top Score: {props.topScore}</h3>
            
        </div> 
   </div>
);

export default Navbar;
