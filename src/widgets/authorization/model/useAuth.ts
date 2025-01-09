import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { authThunk } from '@/entities/user/auth/thunks/thunk'
import { pageConfig } from '@/shared/config/pageConfig'
import { AppDispatch } from '@/app/store'
import { IUser } from '@/entities/user/types/type'

const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const onSubmit = async (data: IUser) => {
    const res = await dispatch(authThunk(data))
    if (authThunk.fulfilled.match(res)) {
      localStorage.setItem('email', JSON.stringify(res.payload.email))
      localStorage.setItem('name', JSON.stringify(res.payload.name))
      navigate(pageConfig.home)
    }
  }

  return { onSubmit }
}

export default useAuth
