import { Statistic } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { financeTotal } from '../../entities/finance/thunk'
import { AppDispatch, RootState } from '../../store/store'

const AppPanel = () => {
	const dispatch = useDispatch<AppDispatch>()

	const { balance } = useSelector((state: RootState) => state.balance)

	useEffect(() => {
		dispatch(financeTotal())
	}, [dispatch])

	return (
		<div>
			<div className="font-semibold grid gap-1 justify-center card mb-2.5">
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
			</div>
			<div className="card">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
				dignissimos dolor, voluptas illo repellendus, ipsam obcaecati dolorum
				est deleniti nesciunt, corporis non pariatur atque adipisci corrupti
				voluptatem sint eos commodi.
			</div>
		</div>
	)
}

export default AppPanel
