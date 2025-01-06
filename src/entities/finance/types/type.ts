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

interface lastMouthData {
	value: number
}

export interface initialStateDataMouth {
	income: lastMouthData
	expenses: lastMouthData
	error: null | string
	loading: boolean
}
