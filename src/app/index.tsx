import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Router } from './Routes/Routes'
import { store } from './store'
import '../../styles/index.scss'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<RouterProvider router={Router} />
	</Provider>,
)
