import logo from '../../../../public/assets/logo/logo.svg'
import { NavLink } from 'react-router-dom'
import {
	MoonIcon,
	PlusIcon,
	QueueListIcon,
	Squares2X2Icon,
	// SunIcon,
	UserIcon,
} from '@heroicons/react/16/solid'
import { Switch } from 'antd'

import { pageConfig } from '@/shared/config/pageConfig'
import useModal from '@/shared/hooks/useModal'
import Popup from '@/shared/ui/Modal/Modal'
import FinanceCreate from '@/widgets/financeCreate/FinanceCreate'

const AppSidebar = () => {
	const { isModalOpen, closeModal, showModal } = useModal()

	return (
		<div className="card">
			<div className="flex justify-between items-center mb-10">
				<div className="flex items-center gap-2.5">
					<img src={logo} alt="myFinance" className="w-10" />
					<h1 className="font-semibold text-menu">MyFinance</h1>
				</div>
			</div>
			<ul className="grid gap-2 mb-5">
				<li>
					<NavLink to={pageConfig.home} className="menu">
						<Squares2X2Icon className="w-5" />
						<span>Главная</span>
					</NavLink>
				</li>
				<li>
					<NavLink to={pageConfig.history} className="menu">
						<QueueListIcon className="w-5" />
						<span>История</span>
					</NavLink>
				</li>
				<li>
					<NavLink to={pageConfig.profile} className="menu">
						<UserIcon className="w-5" />
						<span>Профиль</span>
					</NavLink>
				</li>
			</ul>
			<div className="border opacity-50" />
			<div className="grid px-1 gap-2.5 mt-5">
				<button className="flex gap-1 items-center anim hover:text-gray-400" onClick={showModal}>
					<PlusIcon className="w-5" />
					<span className="text-xl grid">Добавить платеж</span>
				</button>
				<div className="flex gap-2">
					<MoonIcon className="w-5" />
					{/* <SunIcon className="w-5" /> */}
					<Switch className="switch" />
				</div>
			</div>

			<Popup isModalOpen={isModalOpen} closeModal={closeModal}>
				<FinanceCreate />
			</Popup>
		</div>
	)
}

export default AppSidebar
