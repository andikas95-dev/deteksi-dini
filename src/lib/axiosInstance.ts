import axios from "axios";

const baseURL = process.env.NEXTAUTH_URL || 'https://deteksi-dini.vercel.app';

export const locbe = axios.create({
  baseURL: `${baseURL}/api`,
  timeout: 10000,
  // headers: {'X-Custom-Header': 'foobar'}
});