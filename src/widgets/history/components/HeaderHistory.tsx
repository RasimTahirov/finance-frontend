import { DatePicker } from 'antd'

const HeaderHistory = () => {
	return (
		<div className="card flex justify-between">
			<h3>История расходов</h3>
			<div className="flex gap-2.5 justify-end">
				<DatePicker.RangePicker />
			</div>
		</div>
	)
}

export default HeaderHistory
