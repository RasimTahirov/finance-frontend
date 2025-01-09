export interface IInitialStateUser {
  user: IUser | null
  error: null | undefined | string
  loading: boolean
  token: string | null
}

export interface IUser {
  name: string
  email: string
  password: string
}

export interface IRegisterData {
  name: string
  email: string
  password: string
}
