import axios from 'axios';
import { LoginCredential, LoginSuccessResponse } from './models';

export default class UserApi {
  // private static endpoint = 'http://sandbox.potalava.com:9095/api/Auth/authenticate';
  private static endpoint = 'https://reqres.in/api/login';
  // private static endpoint = 'http://my-json-server.typicode.com/resa1154/react-redux/MitraList';
  static login(userLogin: LoginCredential) {
    return axios.post<LoginSuccessResponse>(this.endpoint, userLogin).then((res) => res.data);
  }
}
