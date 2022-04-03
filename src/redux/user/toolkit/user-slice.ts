import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUser, login } from './action-creator';

export interface IUser {
  name: string;
  email: string;
  token: string | null;
}

interface UserState {
  data: IUser;
  isLoading: boolean;
  error: string;
}

export interface UserResponse {
  status: string;
  code: number;
  data: IUser;
}

const initialState: UserState = {
  data: { name: '', email: '', token: null },
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled.type]: (
      state,
      action: PayloadAction<UserResponse>,
    ) => {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload.data;
    },
    [registerUser.pending.type]: state => {
      state.isLoading = true;
    },
    [registerUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [login.fulfilled.type]: (state, action: PayloadAction<UserResponse>) => {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload.data;
    },
    [login.pending.type]: state => {
      state.isLoading = true;
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
