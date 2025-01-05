import { useSelector } from 'react-redux'
import { Button, Form, Input, InputNumber, Radio, Select } from 'antd'

import { RootState } from '@/app/store'
import useFinance from './model/useFinance'

const FinanceCreate = () => {
	const { Option } = Select
	const { category } = useSelector((state: RootState) => state.category)
	const { onSubmit } = useFinance()

	return (
		<div className="grid">
			<h3 className="text-2xl font-semibold mb-2.5">Создание транзакции</h3>
			<Form onFinish={onSubmit}>
				<Form.Item name="title">
					<Input placeholder="Название транзакции" />
				</Form.Item>
				<div className="flex gap-2.5 justify-between">
					<Form.Item name="type">
						<Radio.Group>
							<div className="flex">
								<Radio value="Поступление">Поступление</Radio>
								<Radio value="Расход">Расход</Radio>
							</div>
						</Radio.Group>
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
