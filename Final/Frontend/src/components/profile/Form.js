/* For Edit Profile------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            aboutme: "",
            number: "",
            email: "",


        }
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            aboutme: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            number: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }



    render() {
        return (
            <div className='sulo'>

                <form onSubmit={this.handleSubmit} className='roll'>
                    <h3 className='rockey'>Basic Information</h3>
                    <div className='detaili'>
                        <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="Random Name" /><br />
                        <input type="text" value={this.state.aboutme} onChange={this.lasthandler} placeholder="About me (optional)" /><br />
                    </div>
                    <h3 className='rockey'>Contact Information</h3>
                    <div className='phone'>
                        <input type="numbe" placeholder="+91" disabled /><br />
                        <input type="number" value={this.state.number} onChange={this.passwordhandler} placeholder="Phone Number" /><br />
                    </div>
                    <div className='detaili'>
                        <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="IIT Guwahati Email ID" /><br />
                    </div>
                </form>

            </div>

        )
    }
}

export default Form
