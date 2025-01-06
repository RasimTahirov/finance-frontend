import { Skeleton, Statistic } from 'antd'
import { Cell, Pie, PieChart } from 'recharts'

import useBalance from '@/features/balance/model/useBalance'
import useIncomeExpenses from '../model/useIncomeExpenses'

const AppPanel = () => {
	const { balance, loading, error } = useBalance()
	const { data, color } = useIncomeExpenses()

	if (error) {
		return <div className="card">{error}</div>
	}

	return (
		<div>
			<div className="font-semibold flex gap-2.5 justify-center card mb-2.5">
				{loading ? (
					<Skeleton.Input />
				) : (
					<>
						<span>Общий баланс: </span>
						<Statistic
							className="ant-statistic-title"
							value={balance}
							valueStyle={{
								color: balance < 0 ? '#cf2929' : '#4c9e3f',
								fontSize: '23px',
								fontFamily: 'exo2',
							}}
							precision={2}
							suffix="₽"
						/>
					</>
				)}
			</div>

			{loading ? (
				<Skeleton active />
			) : data.every((value) => value.value === 0) ? (
				<div></div>
			) : (
				<>
					<div className="card pointer-events-none">
						<h4 className="flex justify-center">Динамика за 30 дней</h4>
						<PieChart width={380} height={170}>
							<Pie
								data={data}
								cx={180}
								cy={160}
								startAngle={180}
								endAngle={0}
								innerRadius={80}
								outerRadius={100}
								paddingAngle={5}
								dataKey="value"
								label={({ value }) => `${value}₽`}
								stroke="none"
							>
								{data.map((_, i) => (
									<Cell key={`cell-${i}`} fill={color[i % color.length]} />
								))}
							</Pie>
						</PieChart>
					</div>
				</>
			)}
		</div>
	)
}

export default AppPanel
