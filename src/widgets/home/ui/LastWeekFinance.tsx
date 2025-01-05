import { Skeleton } from 'antd'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import useWeekFinance from '../model/useWeekFinance'

const LastWeekFinance = () => {
	const { finance, loading, data, error } = useWeekFinance()

	if (!Array.isArray(finance) || error) {
		return null
	}

	return (
		<div className="card relative py-10">
			{loading ? (
				<Skeleton.Node active className="full-skeleton" />
			) : (
				<>
					<ResponsiveContainer width="100%" height={500}>
						<BarChart data={data}>
							<XAxis dataKey="name" stroke="#fff" />
							<YAxis stroke="#fff" />
							<Tooltip cursor={{ fill: 'transparent' }} />
							<Bar dataKey="Поступление" fill="#6359e9" barSize={20} minPointSize={5} />
							<Bar dataKey="Расход" fill="#64cff6" barSize={20} minPointSize={5} />
						</BarChart>
					</ResponsiveContainer>

					<div className="absolute flex gap-2.5 right-20 top-0 pt-5">
						<div className="flex items-center gap-2.5">
							<div className="w-3 h-3 rounded-[50%] bg-income" />
							<span>Доход</span>
						</div>
						<div className="flex items-center gap-2.5">
							<div className="w-3 h-3 rounded-[50%] bg-expenses" />
							<span>Расход</span>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default LastWeekFinance
