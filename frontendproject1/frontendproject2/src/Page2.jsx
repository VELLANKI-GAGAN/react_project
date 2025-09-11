import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/Page2.css'

export default class Page2 extends Component {
  render() {
    return (
      <div className='main1'>
        <h1> India Page2</h1>
        <br/><br/>
        <div id='text1'>
        <h3>Today's Topic is HTML and CSS</h3>
        </div>
        <Link to="/page1">Go To Page1</Link>
        <br/><br/>
        <Link to="/page3">Go To Page3</Link>
        <br/><br/>
        <div className='link2'>
        <Link to="/">Go To Home Page</Link>
        </div>
        <br/><br/>
      </div>
    )
  }
}