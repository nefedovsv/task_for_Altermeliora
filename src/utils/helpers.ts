import {IState, IUser} from "../interfaces/interface";
import { message } from 'antd';

export const getStore = (state:any) =>  state.formReducer

export const selectUser = (state: IState, data: IUser) => {
	const user = state.users.filter((item:IUser) => ((item.email === data.email) && (item.password === data.password)))
	return user
}

export const delay = (ms:number) => new Promise(res => setTimeout(res, ms))

export const makeSuccessMsg = (): void => {
	message.success('You was register!');
}

export const makeErrorMsg = (): void => {
	message.success('Something went wrong');
}
