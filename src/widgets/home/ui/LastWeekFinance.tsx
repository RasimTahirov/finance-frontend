import { Skeleton } from 'antd'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import useWeekFinance from '../model/useWeekFinance'

const LastWeekFinance = () => {
	const { loading, data, error } = useWeekFinance()

	if (error) {
		return <div>Ошибка...</div>
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
				</>
			)}
		</div>
	)
}

export default LastWeekFinance
