import axios from 'axios';

export default function buildClient({ req }) {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'https://ticketing-duykim.cloud.okteto.net',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
}
