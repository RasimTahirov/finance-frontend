import { useLocation } from 'react-router-dom'
import Main from '../../app/layouts/Main'
import AppSidebar from '../appSidebar/AppSidebar'
import { pageConfig } from '../../config/pageConfig'

const Layout = () => {
	const location = useLocation()

	const authAndRegister = [pageConfig.auth, pageConfig.register]

	if (authAndRegister.includes(location.pathname)) {
		return <Main />
	}

	return (
		<div className="container py-5 grid grid-cols-[15%_65%_20%] min-h-screen gap-x-5">
			<AppSidebar />
			<Main />
			<div className="card">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit
				error ipsam rem atque porro quidem cum dolor, quis itaque, illo,
				perferendis deleniti explicabo maiores repellat! Obcaecati beatae libero
				culpa? Sint esse quidem rerum vel architecto doloremque. Atque itaque
				exercitationem rem modi dicta ex optio, delectus illo facere id
				adipisci.
			</div>
		</div>
	)
}

export default Layout
