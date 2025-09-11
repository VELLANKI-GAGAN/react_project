import React, { Component } from 'react'
import './css/Page6.css'

export default class Page6 extends Component {
  render() {
    return (
      <>
          <div id='header'>
               <div className='logo'>
                    My Project Logo
               </div>
          </div>
          <div id='section'>
                    <div className='card'>
                         <img src='images/1.png' alt='image1'></img>
                         <label>BWM</label>
                    </div>
                    <div className='card'>
                         <img src='images/audi.png' alt='image2'></img>
                         <label>Audi</label>
                    </div>
                    <div className='card'>
                         <img src='images/audi1.png' alt='image2'></img>
                         <label>Audi</label>
                    </div>

          </div>
          <div id='footer'>Copyright @ 2025. All rights reserved.</div>

      </>
    )
  }
}