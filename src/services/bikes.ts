import axios from 'axios';
import { BASE_URL } from '../constants';

export const getAllBikes = async (query: string) => {
  return axios.get(`${BASE_URL}${query}`);
};
