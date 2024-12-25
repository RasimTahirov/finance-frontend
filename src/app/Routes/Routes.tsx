import { createBrowserRouter } from 'react-router-dom'
import { pageConfig } from '../../config/pageConfig'

import RegisterPage from '../../pages/register/RegisterPage'
import AuthorizationPage from '../../pages/authorization/AuthorizationPage'
import HomePage from '../../pages/home/HomePage'
import HistoryPage from '../../pages/history/HistoryPage'
import ProfilePage from '../../pages/profile/ProfilePage'
import Layout from '../../widgets/layout/Layout'

export const Router = createBrowserRouter([
	{
		path: pageConfig.home,
		element: <Layout />,
		children: [
			{
				path: pageConfig.home,
				element: <HomePage />,
			},
			{
				path: pageConfig.register,
				element: <RegisterPage />,
			},
			{
				path: pageConfig.auth,
				element: <AuthorizationPage />,
			},
			{
				path: pageConfig.history,
				element: <HistoryPage />,
			},
			{
				path: pageConfig.profile,
				element: <ProfilePage />,
			},
		],
	},
])
