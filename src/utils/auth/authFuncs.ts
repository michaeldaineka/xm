import { loginRequest } from '../../store/slices/authSlice';
import {Dispatch} from "redux";

const doLogin = (values: any, dispatch: Dispatch): void => {
  dispatch(loginRequest());
};

export { doLogin };
