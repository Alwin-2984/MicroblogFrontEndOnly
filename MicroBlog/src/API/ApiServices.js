import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;

export function RegistrationAndLogin(formData, signUp) {
  if (signUp) {
    let url = `${BASE_URL}users/Candidate`;

    return axios.post(url, formData);
  } else {
    let url = `${BASE_URL}login`;

    return axios.post(url, formData);
  }
}
