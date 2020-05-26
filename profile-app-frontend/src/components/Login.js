import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../service/AuthService';

export default class Login extends Component {

    state={
        username: '',
        password:'',
        isSubmitted: false,
        service: new AuthService()
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.state.service.login(username, password)
         .then(res => {
            this.setState({ username: "", password: "", isSubmitted: true });
            this.props.setUser(res)
            console.log(this.props.history)
            this.props.history.push('/profile')
          })
         .catch(e => console.log(e))    
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                    <label>Password:</label>
                    <input type="text" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

                    <input type="submit" value="Login" />
                </form>
                <p>Don't have account?
                   <Link to={"/signup"}> Signup</Link>
                </p>
            </div>
        )
    }
}

