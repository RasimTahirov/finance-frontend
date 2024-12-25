export interface categoryData {
	title: string
	id: number
}

interface initialStateData {
	category: categoryData[] | null
	error: null | string
	loading: boolean
}

export const initialState: initialStateData = {
	category: [],
	error: null,
	loading: false,
}
