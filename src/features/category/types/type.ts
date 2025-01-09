export interface ICategory {
  title: string
  id: number
}

export interface IInitialStateCategory {
  category: ICategory[] | null
  error: null | string
  loading: boolean
}
