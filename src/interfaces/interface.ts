export interface IUser {
	email: string;
	password: string;
	name?: string;
}

export interface IState {
	currentUser?: IUser | null;
	users: IUser[] | [];
	isLoaded: boolean;
}

export enum Language {
	ENG = 'ENG',
	RUS = 'RUS',
}
