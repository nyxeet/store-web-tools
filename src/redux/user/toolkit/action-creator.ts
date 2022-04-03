import axios from 'axios';
import { UserResponse } from './user-slice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001';

const token = {
  set(token: string | null) {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('token', token);
    }
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
    localStorage.removeItem('token');
  },
};

export const registerUser = createAsyncThunk(
  'user/register',
  async (data: object, thunkAPI) => {
    try {
      const response = await axios.post<UserResponse>('user/signup', data);
      token.set(response.data.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        'Не удалось зарегестрировать пользователя',
      );
    }
  },
);
export const login = createAsyncThunk(
  'user/login',
  async (data: object, thunkAPI) => {
    try {
      const response = await axios.post<UserResponse>('user/login', data);
      token.set(response.data.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось залогиниться');
    }
  },
);
