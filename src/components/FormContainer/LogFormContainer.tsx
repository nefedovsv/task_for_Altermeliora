import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import LogForm from "./LogForm"
import {useState} from "react";

export interface IProps {
	dispatch: Dispatch<any>;
	login: boolean;
	setLogStatus: (login:boolean) => void
}

export const LogFormContainer: React.FC<{}> = () => {

	const dispatch: Dispatch = useDispatch();

	const [login,setLogStatus] = useState<boolean>(true);

	const logFormProps:IProps  = {
		dispatch,
		login,
		setLogStatus
	}

	return (
		<LogForm
			{...logFormProps}
		/>
	);
};
