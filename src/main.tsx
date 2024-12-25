import { createRoot } from 'react-dom/client'

import '../styles/index.scss'
import { RouterProvider } from 'react-router-dom'
import { Router } from './app/Routes/Routes'
import { Provider } from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<RouterProvider router={Router} />
	</Provider>,
)
