import axios from "axios";

const instance = axios.create({
  baseURL: 'https://hub.docker.com/v2/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

instance.defaults.timeout = 2500;

export const get = (url:string) => {
  instance.get(url)
}

export const post = (url:string, data: any) => {
  instance.post(url, data)
}