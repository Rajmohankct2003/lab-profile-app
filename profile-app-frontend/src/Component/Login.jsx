import React, { Component } from 'react'
import AuthService from '../Services/auth-service'

export default class Login extends Component {

    state = {
     username: '',
     password: '',
     service: new AuthService
    }

    handleChange = (e) => {
      const {name, value} = e.target
      this.setState({
         [name]: value 
      })
    }
    handleSubmit = (e) => {
      e.preventDefault()
      this.state.service.login(username, password)
        .then()
      
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label name="username">Name : </label>
                    <input type="string" 
                           name="username" 
                           value={this.state.username} 
                           onChange={(e) => handleChange(e)}
                        ></input>
                    <label name="password">Password : </label>
                    <input type="string" 
                           name="password" 
                           value={this.state.password} 
                           onChange={(e) => handleChange(e)}
                        ></input>    
                </form>               
            </div>
        )
    }
}
