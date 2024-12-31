import { Button, Form, Input, InputNumber, Select } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { categoryAll } from '../../entities/category/thunk'
import { financeData } from '../../entities/finance/initialState'
import {
	financeAllThunk,
	financeCreateThunk,
} from '../../entities/finance/thunk'
import { AppDispatch, RootState } from '../../store/store'

const FinanceCreate = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { Option } = Select
	const { category } = useSelector((state: RootState) => state.category)

	useEffect(() => {
		dispatch(categoryAll())
	}, [dispatch])

	const onSubmit = (data: financeData) => {
		dispatch(financeCreateThunk(data)).then(() => dispatch(financeAllThunk()))
	}

	return (
		<div className="grid">
			<h3 className="text-2xl font-semibold mb-2.5">Создание транзакции</h3>
			<Form onFinish={onSubmit}>
				<Form.Item name="title">
					<Input placeholder="Название транзакции" />
				</Form.Item>
				<div className="flex gap-2.5 justify-between">
					<Form.Item name="type" className="w-36">
						<Select placeholder="Тип операции">
							<Select.Option value="Поступление">Поступление</Select.Option>
							<Select.Option value="Расход">Расход</Select.Option>
						</Select>
					</Form.Item>

					<Form.Item name="category" className="w-48">
						<Select placeholder="Выберите категорию">
							{Array.isArray(category) &&
								category.map((cat) => (
									<Option key={cat.id} value={cat.id}>
										{cat.title}
									</Option>
								))}
						</Select>
					</Form.Item>

					<Form.Item name="amount" className="w-24">
						<InputNumber addonAfter="₽" />
					</Form.Item>
				</div>
				<div className="flex justify-center">
					<Button htmlType="submit">Создать транзакцию</Button>
				</div>
			</Form>
		</div>
	)
}

export default FinanceCreate
