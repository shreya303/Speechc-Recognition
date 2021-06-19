import React from 'react';
import logo from './img3.jpg';
function About()  {
  return(
        <div>
            <img className='im' src={logo} />
            <h1 className='text2'>About the page</h1>
            <h3 className='text3'>We have developed this application as a mixture of testing our web development skills and get very well versed
            with Speech Recognition in Python.This project also caused us to learn an entirely new programming language React JS, it's involved inspect
             front-end and also the part of it dealing with Speech Recognition.</h3>
	      </div>
    )
}

export default About;
