export interface UserState {
	user: UserData | null
	error: null | undefined | string
	loading: boolean
	token: string | null
}

export interface UserData {
	name: string
	email: string
	password: string
}

export interface RegisterData {
	name: string
	email: string
	password: string
}
