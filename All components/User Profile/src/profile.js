/* For User Profile------------------>>>>>>>>>>>>>>>>>>>*/

import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import { BsCheckCircleFill, BsPersonCircle } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa"
import { RiHome2Fill } from "react-icons/ri";
import Doll from "./sliders";

class Profile extends Component {
  render() {
    return (
      <div className="Appe">
        <div className='conta'>
          <BsPersonCircle className='pic' size={100} />
          <div className='su'>
            <p>Member Since</p>
            <p>XXXX, June</p>
          </div>
          <div className='su1'>
            <p>Authorised User<BsCheckCircleFill className='out' /></p>
          </div>
          <div className='su2'>
            <p>Number of Items Sold:<span className='o'>4</span></p>
            <p>Number of Items Listed:<span className='o'>7</span></p>
          </div>
          <div>
            <Button className='btnn'><FaRegPaperPlane className='tele' />Share Your Profile</Button>
          </div>
        </div>
        <div className='contain'>
          <div className='royan'>
            <h1 className='head'>Random Name</h1>
          </div>
          <div className="btn2">
            <Button className="btn3">Edit Profile</Button>
          </div>
          <div className='line'></div>
          <h3 className='head1'>Items listed by the seller:</h3>
          <Doll />
          <div className="btn5">
            <Button className="btn4">Sell Products</Button>
          </div>
          <div className="btn5">
            <Button className="btn6"><RiHome2Fill className='hom' />Back to Home</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
