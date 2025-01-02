import Main from '../../app/layouts/Main'
import AppSidebar from '../appSidebar/AppSidebar'
import { useLocation } from 'react-router-dom'
import { pageConfig } from '../../config/pageConfig'
import AppPanel from '../appPanel/AppPanel'

const Layout = () => {
	const location = useLocation()

	const authAndRegister = [pageConfig.auth, pageConfig.register]

	if (authAndRegister.includes(location.pathname)) {
		return <Main />
	}

	return (
		<div className="container justify-between py-5 grid grid-cols-[18%_60%_20%] min-h-screen">
			<AppSidebar />
			<Main />
			<AppPanel />
		</div>
	)
}

export default Layout
