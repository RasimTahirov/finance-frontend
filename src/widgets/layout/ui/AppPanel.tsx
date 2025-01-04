import useBalance from '@/features/balance/model/useBalance'
import { Skeleton, Statistic } from 'antd'

const AppPanel = () => {
	const { balance, loading, error } = useBalance()

	if (error) {
		return (
			<div className="card">
				<span>{error}</span>
			</div>
		)
	}

	return (
		<div>
			<div className="font-semibold grid gap-1 justify-center card mb-2.5">
				{loading ? (
					<Skeleton.Input />
				) : (
					<>
						<span>Общий баланс</span>
						<Statistic
							className="ant-statistic-title"
							value={balance}
							valueStyle={{
								color: balance < 0 ? '#cf2929' : '#4c9e3f',
								fontSize: '26px',
							}}
							precision={2}
							suffix="₽"
						/>
					</>
				)}
			</div>

			<div className="card">
				{loading ? (
					<Skeleton active />
				) : (
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa sit, error
						explicabo autem reprehenderit omnis ea quos qui, voluptatem cumque impedit est voluptas
						nihil aliquam soluta deleniti dolor ullam?
					</p>
				)}
			</div>
		</div>
	)
}

export default AppPanel
