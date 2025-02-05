import axios from "axios";

export const locbe = axios.create({
  baseURL: 'http://localhost:4040/api/',
  timeout: 3000,
  // headers: {'X-Custom-Header': 'foobar'}
});