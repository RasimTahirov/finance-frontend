import Popup from '../../shared/ui/Modal/Modal'
import FinanceCreate from '../financeCreate/FinanceCreate'
import logo from '../../../public/assets/logo/logo.svg'
import { NavLink } from 'react-router-dom'
import { pageConfig } from '../../config/pageConfig'
import {
	MoonIcon,
	PlusIcon,
	QueueListIcon,
	Squares2X2Icon,
	UserIcon,
} from '@heroicons/react/16/solid'
import { Switch } from 'antd'
import { useState } from 'react'

const AppSidebar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className="card">
			<div className="flex justify-between items-center mb-10">
				<div className="flex items-center gap-2.5">
					<img src={logo} alt="myFinance" className="w-10" />
					<h1 className="font-semibold text-menu">MyFinance</h1>
				</div>
				<div className="flex gap-2">
					<MoonIcon className="w-5" />
					{/* <SunIcon className="w-5" /> */}
					<Switch className="switch" />
				</div>
			</div>

			<ul className="grid gap-2 mb-5">
				<li>
					<NavLink to={pageConfig.home} className="menu">
						<Squares2X2Icon className="w-5" />
						Главная
					</NavLink>
				</li>
				<li>
					<NavLink to={pageConfig.history} className="menu">
						<QueueListIcon className="w-5" />
						История
					</NavLink>
				</li>
				<li>
					<NavLink to={pageConfig.profile} className="menu">
						<UserIcon className="w-5" />
						Профиль
					</NavLink>
				</li>
			</ul>
			<div className="border opacity-50" />
			<div className="grid gap-2 mt-5">
				<div className="">
					<button className="menu" onClick={showModal}>
						<PlusIcon className="w-5" />
						<span className="text-xl grid">Добавить платеж</span>
					</button>
					<Popup isModalOpen={isModalOpen} closeModal={closeModal}>
						<FinanceCreate />
					</Popup>
				</div>
			</div>
		</div>
	)
}

export default AppSidebar
