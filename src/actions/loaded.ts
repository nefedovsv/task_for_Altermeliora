import {LOADED} from "../utils/constants";
import { Action } from "redux";

export interface  ILoadWithError extends Action<typeof LOADED> {
	payload: null;
}

export function loaded(): ILoadWithError {
	return {
		type: LOADED,
		payload: null,
	};
}
