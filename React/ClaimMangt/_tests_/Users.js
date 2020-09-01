import axios from 'axios';

class Users {
  static all() {
    return axios.get('http://localhost:7001/users/').then(resp => resp.data);
  }
}

export default Users;