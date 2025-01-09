import { pageConfig } from '@/shared/config/pageConfig'
import { useLocation } from 'react-router-dom'

const useAuthLayout = () => {
  const location = useLocation()

  const authAndRegister = [pageConfig.auth, pageConfig.register]

  return authAndRegister.includes(location.pathname)
}

export default useAuthLayout
