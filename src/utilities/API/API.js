import axios from 'axios';

export const instanceApi = axios.create({
  baseURL: 'https://academy-training.appssquare.com',
});
