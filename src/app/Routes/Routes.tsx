import { createBrowserRouter } from 'react-router-dom'

import { pageConfig } from '../../shared/config/pageConfig'
import { AuthorizationPage, HistoryPage, HomePage, ProfilePage, RegisterPage } from '@/pages'
import Layout from '@/widgets/layout/Layout'

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
