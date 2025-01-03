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

	const today = new Date()

	const sortDate = Object.entries(financeDate)
		.map(([day, { Поступление, Расход }]) => ({
			name: day,
			Поступление,
			Расход,
		}))
		.sort((a, b) => {
			const [dayA, monthA] = a.name.split('.')
			const [dayB, monthB] = b.name.split('.')

			const dateA = new Date(`${monthA}/${dayA}/${today.getFullYear()}`)
			const dateB = new Date(`${monthB}/${dayB}/${today.getFullYear()}`)

			return dateB.getTime() - dateA.getTime()
		})

	const data = sortDate.slice(0, 7).reverse()

	return (
		<div className="card">
			<div className="relative">
				<ResponsiveContainer width="100%" height={500}>
					<BarChart data={data}>
						<XAxis dataKey="name" stroke="#fff" />
						<YAxis stroke="#fff" />
						<Tooltip cursor={{ fill: 'transparent' }} />
						<Bar dataKey="Поступление" fill="#6359e9" barSize={20} />
						<Bar dataKey="Расход" fill="#64cff6" barSize={20} />
					</BarChart>
				</ResponsiveContainer>

				<div className="absolute flex gap-2.5 left-20 top-0 mb-10">
					<div className="flex items-center gap-2.5">
						<div className="w-3 h-3 rounded-[50%] bg-income" />
						<span>Доход</span>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="w-3 h-3 rounded-[50%] bg-expenses" />
						<span>Расход</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FinanceLineChart

// позже сделать фильтрацию на бэке
