import React, { Component } from 'react'
import UserService from '../service/UserService'
export default class Profile extends Component {

    state={
      uploading: true,
      service: new UserService()
    }

    retrieveUser = () => {
       this.state.service.show()
       .then(user => {
         this.props.setUser(user)
       })
    }

    handleChange = (e) => {
      const formData = new FormData();
      formData.append("profileimage", e.target.files[0])
      this.state.service.addProfileImage(formData)
        .then(() => {
          // this.setState({
          //   uploadComplete: true
          // })
          this.retrieveUser()
        //   this.props.history.push('/')
          // this.setState({uploading: false})
        })
    }

    

    render() {
        return (
            <div>
            <h1>Welcome, {this.props.user.username}</h1>
            <img src={`http://localhost:4000/uploads/${this.props.user.profileimage}`} alt="User img"/>
            <form>
                <input type="file" name="profileimage" onChange={this.handleChange}/>
            </form>
        </div>
        )
    }
}
