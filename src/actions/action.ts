import {LOG_IN, SIGN_UP} from "../utils/constants";
import {ISignUpAction, signFromSaga} from "./signUp";
import {ILogInAction, logFromSaga} from "./logIn";
import { SagaIterator } from '@redux-saga/core';
import { fork, call, takeEvery, select, put } from 'redux-saga/effects';
import {IState, IUser} from "../interfaces/interface";
import {delay, getStore, makeErrorMsg, makeSuccessMsg, selectUser} from "../utils/helpers";
import { loaded } from "./loaded";

function* rootSaga(): SagaIterator {
	yield fork(Saga);
}

export default function* Saga() {
	yield takeEvery(LOG_IN, logInSaga);
	yield takeEvery(SIGN_UP, signUpSaga);
}

export function* signUpSaga(action: ISignUpAction) {

	const state:IState = yield select(getStore)

	const sameUser:IUser[] = selectUser(state, action.payload)

	yield delay(2000)

	try {
		if(sameUser.length>=1){
			yield call(makeSuccessMsg)
			yield put(loaded())
		} else{
			yield put(signFromSaga(action.payload))
			yield call(makeSuccessMsg)
		}
	} catch (e) {
		yield call(makeErrorMsg)
	}
}

export function* logInSaga(action: ILogInAction) {

	const state:IState = yield select(getStore)

	const user:IUser[] = selectUser(state, action.payload)

	yield delay(2000)

	try {
		if(user.length){
			yield put(logFromSaga(user[0]))
			yield call(makeSuccessMsg)
		} else {
			yield put(loaded())
			yield call(makeErrorMsg)
		}
	} catch (e) {
		yield call(makeErrorMsg)
	}
}

