export interface categoryData {
	title: string
	id: number
}

export interface initialStateData {
	category: categoryData[] | null
	error: null | string
	loading: boolean
}
