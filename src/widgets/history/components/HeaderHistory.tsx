import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"
import { DatePicker, Input } from "antd"

const HeaderHistory = () => {
  return (
    <div className="card flex justify-between">
					<h3>История расходов</h3>
					<div className='flex gap-2.5 justify-end'>
						<Input
							className="w-1/2"
							placeholder='поиск транзакций'
							prefix={<MagnifyingGlassIcon className="w-5" />}
						/>
						<DatePicker.RangePicker />
					</div>
				</div>
  )
}

export default HeaderHistory