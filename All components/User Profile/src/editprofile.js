/* For Edit Profile------------------>>>>>>>>>>>>>>>>>>>*/


import React, { Component } from 'react';
import Form from './components/Form';
import { Button } from 'antd';
import { BsCheckCircleFill, BsPersonCircle } from "react-icons/bs";
import { FaRegPaperPlane,FaEdit } from "react-icons/fa"

class Appy extends Component {
  render() {
    return (
      <div className="Appe">
        <div className='conta'>
          <BsPersonCircle className='pic' size={100} />
          <FaEdit className='edit'/>
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
          <div className='saki'>
            <Button className='btnn'><FaRegPaperPlane className='tele' />Share Your Profile</Button>
          </div>
        </div>
        <div className='contain'>
          <div className='royan'>
            <h1 className='head3'>Edit Profile</h1>
          </div>
          <div className='line2'></div>
          <Form />
        <Button className="btn9">Discard</Button>
        <Button className="btn10">Save Changes</Button>

        </div>
      </div>
    );
  }
}

export default Appy;