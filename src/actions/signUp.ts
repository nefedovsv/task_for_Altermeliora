import { IUser } from "../interfaces/interface";
import { SIGN_UP, SIGN_UP_SAGA } from "../utils/constants";
import { Action } from "redux";

export interface ISignUpAction extends Action<any> {
  payload: IUser;
}

export function signUp(data: IUser): ISignUpAction {
  return {
    type: SIGN_UP,
    payload: data
  };
}

export function signFromSaga(data: IUser): ISignUpAction {
  return {
    type: SIGN_UP_SAGA,
    payload: data
  };
}
