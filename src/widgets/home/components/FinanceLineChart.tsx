import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store/store'
import { useEffect } from 'react'
import { financeAllThunk } from '../../../entities/finance/thunk'
import {
	Bar,
	BarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

interface FinanceType {
	Поступление: number
	Расход: number
}

const FinanceLineChart = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { finance } = useSelector((state: RootState) => state.finance)

	useEffect(() => {
		dispatch(financeAllThunk())
	}, [dispatch])

	if (!Array.isArray(finance)) {
		return null
	}

	const financeDate: Record<string, FinanceType> = finance.reduce(
		(acc, fin) => {
			const day = String(new Date(fin.createdAt).getDate()).padStart(2, '0')
			const month = String(new Date(fin.createdAt).getMonth() + 1).padStart(
				2,
				'0',
			)

			const date = `${day}.${month}`

			if (!acc[date]) {
				acc[date] = { Поступление: 0, Расход: 0 }
			}

			if (fin.amount > 0) {
				acc[date].Поступление += fin.amount
			} else {
				acc[date].Расход += Math.abs(fin.amount)
			}

			return acc
		},
		{} as Record<string, FinanceType>,
	)

	const data = Object.entries(financeDate).map(
		([day, { Поступление, Расход }]) => ({
			name: day,
			Поступление,
			Расход,
		}),
	)

	return (
		<div className="card">
			<ResponsiveContainer width="100%" height={500}>
				<BarChart height={500} data={data}>
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip cursor={{ fill: 'transparent' }} />
					<Bar dataKey="Поступление" fill="#6359e9" barSize={20} />
					<Bar dataKey="Расход" fill="#64cff6" barSize={20} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default FinanceLineChart
