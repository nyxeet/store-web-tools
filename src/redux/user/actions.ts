import { Dispatch, Action, ActionCreator } from 'redux';
import axios from 'axios';
import { UserActionTypes, Request } from './types';
import { ThunkAction } from 'redux-thunk';
import { ApplicationState } from '../store';
axios.defaults.baseURL = 'http://localhost:3001';

export type AppThunk = ThunkAction<
  void,
  ApplicationState,
  Request,
  Action<string>
>;

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem('token', token);
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
    localStorage.removeItem('token');
  },
};

export const register: ActionCreator<AppThunk> =
  data => async (dispatch: Dispatch) => {
    dispatch({
      type: UserActionTypes.REGISTER_REQUEST,
    });
    try {
      const response = await axios.post('/user/signup', data);
      token.set(response.data.data.token);
      return dispatch({
        type: UserActionTypes.REGISTER_SUCCESS,
        payload: response.data,
      });
    } catch (e: any) {
      return dispatch({
        type: UserActionTypes.REGISTER_ERROR,
        payload: e.response.data,
      });
    }
  };

export const login = (data: Request) => async (dispatch: Dispatch) => {
  dispatch({ type: UserActionTypes.LOGIN_REQUEST });

  try {
    const response = await axios.post('/user/login', data);
    token.set(response.data.data.token);
    return dispatch({
      type: UserActionTypes.LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (e: any) {
    return dispatch({
      type: UserActionTypes.LOGIN_ERROR,
      payload: e.response.data,
    });
  }
};
