import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import axios from 'axios';
import { getServerSession } from 'next-auth';

export const api = axios.create({
  baseURL: 'http://localhost:5000', 
});

api.interceptors.request.use(
  async (config) => {
    const session = await getServerSession(authOptions);
    if (session?.backendTokens.accessToken) {
      config.headers['Authorization'] = `Bearer ${session.backendTokens.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
