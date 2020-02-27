import { IState } from "../interfaces/interface";
import {LOADED, LOG_IN, LOG_IN_SAGA, SIGN_UP, SIGN_UP_SAGA} from "../utils/constants";
import { ILogInAction } from "../actions/logIn";
import { ISignUpAction } from "../actions/signUp";
import {ILoadWithError} from "../actions/loaded";

const initialState: IState = {
	users: [],
	isLoaded: true,
}

export function formReducer(
	state: IState = initialState,
	action: ILogInAction | ISignUpAction |  ILoadWithError
) {
	switch (action.type) {
		case LOG_IN:
				return {
					...state,
					isLoaded: false,
				}
		case LOG_IN_SAGA:
				return {
					...state,
					isLoaded: true,
					currentUser: action.payload,
				};
		case SIGN_UP:
			return {
				...state,
				isLoaded: false,
			}
		case SIGN_UP_SAGA:
			return {
				...state,
				users: [ ...state.users, action.payload],
				isLoaded: true,
				currentUser: action.payload,
			};
		case LOADED:
			return {
				...state,
				isLoaded: true,
			}
		default:
			return state;
	}
}
