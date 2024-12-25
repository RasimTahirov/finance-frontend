const nameLocalStorage = localStorage.getItem('name')
const emailLocalStorage = localStorage.getItem('email')

export const userName = nameLocalStorage ? JSON.parse(nameLocalStorage) : null
export const userEmail = emailLocalStorage
	? JSON.parse(emailLocalStorage)
	: null

// Удалить или нет ????
