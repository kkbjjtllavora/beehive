import axios from 'axios';

const instance = axios.create({
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://bibo-hive-60798.firebaseio.com/',
});

export default instance;
