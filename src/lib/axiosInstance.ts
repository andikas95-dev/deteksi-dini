import axios from "axios";

const baseURL = process.env.NEXTAUTH_URL || 'http://localhost:4040';

export const locbe = axios.create({
  baseURL: `${baseURL}/api`,
  timeout: 3000,
  // headers: {'X-Custom-Header': 'foobar'}
});