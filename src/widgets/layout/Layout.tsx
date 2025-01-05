import Main from '@/app/layouts/Main'

import useAuthLayout from './model/useAuthLayout'
import AppPanel from './ui/AppPanel'
import AppSidebar from './ui/AppSidebar'

const Layout = () => {
	const authLayout = useAuthLayout()

	if (authLayout) {
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
