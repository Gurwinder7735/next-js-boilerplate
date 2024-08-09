import { get, post } from "../api-config";
import { API_ENDPOINTS } from "../api-endpoints";
import { ISocialLogin } from "./types";

export const socialLogin = ({ token }: ISocialLogin) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.AUTH.SOCIAL_LOGIN, { token })
      .then((res: any) => {
        resolve(res?.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getData = () => {
  return new Promise((resolve, reject) => {
    get(API_ENDPOINTS.AUTH.SOCIAL_LOGIN)
      .then((res: any) => {
        resolve(res?.data);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};
