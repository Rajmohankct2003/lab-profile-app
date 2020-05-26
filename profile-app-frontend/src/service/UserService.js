import axios from 'axios';

class UserService {
    constructor() {
      this.service = axios.create({
        baseURL: 'http://localhost:4000',
        withCredentials: true
      })
    }
  
    edit = (job) => {
      return this.service.post('/auth/editprofile', {job: job})
      .then(response => response.data)
    }

    addProfileImage = (image) => {
      return this.service.post('/profile/upload', image)
      .then(response => response.data)
    }

    show = () => {
      return this.service.get('/profile/show')
      .then(response => response.data)
    }
  
  }
  
  export default UserService