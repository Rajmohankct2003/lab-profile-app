import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthService from '../service/AuthService';

export default class Signup extends Component {

    state={
        username: '',
        password:'',
        course: '',
        campus: '',
        isSubmitted: false,
        service: new AuthService()
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const course = this.state.course;
        const campus = this.state.campus;
        this.state.service.signup(username, password, course, campus)
         .then(res => {
            this.setState({ 
                username: "", 
                password: "",
                course: "",
                campus: "",
                isSubmitted: true    
            });
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
               { this.state.isSubmitted && <Redirect to='/login' />}

                <form onSubmit={this.handleFormSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                    <label>Campus:</label>
                    <input type="text" name="campus" value={this.state.campus} onChange={e => this.handleChange(e)} />
                    <label>Course:</label>
                    <input type="text" name="course" value={this.state.course} onChange={e => this.handleChange(e)} />
                    <label>Password:</label>
                    <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

                    <input type="submit" value="Signup" />
                </form>
                <p>If you have an account already?
                   <Link to={"/login"}> Login</Link>
                </p>
            </div>
        )
    }
}

