import {IUser} from "../interfaces/interface";
import {LOG_IN, LOG_IN_SAGA} from "../utils/constants";
import { Action } from "redux";

export interface ILogInAction extends Action<any> {
	payload: IUser;
}

export function logIn(data: IUser): ILogInAction {
	return {
		type: LOG_IN,
		payload: data
	};
}

export function logFromSaga(data: IUser): ILogInAction {
	return {
		type: LOG_IN_SAGA,
		payload: data
	};
}
