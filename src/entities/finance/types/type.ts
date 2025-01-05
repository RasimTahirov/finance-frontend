export interface financeData {
	id: number
	title: string
	amount: number
	type: string
	category: {
		id: number
		title: string
	}
	createdAt: string
}

export interface initialStateData {
	finance: financeData[]
	error: null | string
	loading: boolean
}
