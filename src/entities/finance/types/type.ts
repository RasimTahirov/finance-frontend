export interface IFinance {
  id: number
  title: string
  amount: number
  type: string
  createdAt: string
  category: {
    id: number
    title: string
  }
}

export interface IInitialStateFinance {
  finance: IFinance[]
  error: null | string
  loading: boolean
}

export interface IInitialStateHistory {
  finance: IFinance[]
  totalPage: number
  total: number
  currentPage: number
  error: null | string
  loading: boolean
}

export interface IIitialStateLastMouth {
  income: IIncomeAndExpenses
  expenses: IIncomeAndExpenses
  error: null | string
  loading: boolean
}

interface IIncomeAndExpenses {
  value: number
}
