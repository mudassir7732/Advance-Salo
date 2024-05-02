import axios from "axios"
import BASE_URL from '../constants/urls';
import LocalStorageService from "../utils/localStorageService";
import localStorageService from '../utils/localStorageService';

export const Interceptor = ()=>{
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  })
  axiosInstance.interceptors.request.use(
    (config)=>{
      const token = LocalStorageService.getAccessToken();
      if(token)
    }
  )
}