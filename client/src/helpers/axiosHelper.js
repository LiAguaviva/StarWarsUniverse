import axios from "axios";

const URL_BASE = 'https://swapi.py4e.com/api/'
// const URL_BASE = 'http://93.93.117.48/api/' // PIXAR

export const getData = (url) => {
  return axios.get(URL_BASE + url);
}