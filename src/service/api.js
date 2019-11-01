import axios from 'axios'

export default axios.create({
  baseURL: 'http://192.168.1.113:8000/v1/',
  withCredentials: false,
  crossDomain: true,
  headers: {
    'Content-Type': 'application/json'
  }
})


