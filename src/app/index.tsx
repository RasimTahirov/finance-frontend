import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import '../../styles/index.scss'
import { Router } from './Routes/Routes'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<RouterProvider router={Router} />
	</Provider>,
)
