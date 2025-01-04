import { useEffect, useState } from 'react'

const useUserData = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const user = () => {
		const nameLocalStorage = localStorage.getItem('name')
		const emailLocalStorage = localStorage.getItem('email')

		setName(nameLocalStorage ? JSON.parse(nameLocalStorage) : null)
		setEmail(emailLocalStorage ? JSON.parse(emailLocalStorage) : null)
	}

	useEffect(() => {
		user()
	}, [])

	return { name, email }
}

export default useUserData
