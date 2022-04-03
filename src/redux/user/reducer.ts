import { Reducer } from 'redux';

import { UserActionTypes, userState } from './types';
export const initialState: userState = {
  data: {
    email: null,
    token: null,
  },
  errors: undefined,
  loading: false,
};

const reducer: Reducer<userState> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.REGISTER_REQUEST: {
      return { ...state, loading: true };
    }
    case UserActionTypes.REGISTER_SUCCESS: {
      return { ...state, loading: false, data: action.payload.data };
    }
    case UserActionTypes.REGISTER_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case UserActionTypes.LOGIN_REQUEST: {
      return { ...state, loading: true };
    }
    case UserActionTypes.LOGIN_SUCCESS: {
      return { ...state, loading: false, data: action.payload.data };
    }
    case UserActionTypes.LOGIN_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as userReducer };
