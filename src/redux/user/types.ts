export interface User {
  email: string | null;
  token: string | null;
}

export enum UserActionTypes {
  REGISTER_REQUEST = 'user/REGISTER_REQUEST',
  REGISTER_SUCCESS = 'user/REGISTER_SUCCESS',
  REGISTER_ERROR = 'user/REGISTER_ERROR',
  LOGIN_REQUEST = 'user/LOGIN_REQUEST',
  LOGIN_SUCCESS = 'user/LOGIN_SUCCESS',
  LOGIN_ERROR = 'user/LOGIN_ERROR',
}

export interface userState {
  readonly loading: boolean;
  readonly data: User;
  readonly errors?: string;
}
export interface Request {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}
