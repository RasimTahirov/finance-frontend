import { createBrowserRouter } from 'react-router-dom'
import { pageConfig } from '../../shared/config/pageConfig'

import Layout from '@/widgets/layout/Layout'
import AuthorizationPage from '@/pages/authorization/AuthorizationPage'
import HistoryPage from '@/pages/history/HistoryPage'
import HomePage from '@/pages/home/HomePage'
import ProfilePage from '@/pages/profile/ProfilePage'
import RegisterPage from '@/pages/register/RegisterPage'

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
