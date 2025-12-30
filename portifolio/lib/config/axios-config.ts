'use server'
import axios, {AxiosInstance} from 'axios';



export const createApi = async (): Promise<AxiosInstance> => {
  return axios.create({
    baseURL: "https://api.github.com",
  });
};