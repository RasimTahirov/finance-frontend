const nameLocalStorage = localStorage.getItem('name')
const emailLocalStorage = localStorage.getItem('email')

export const name = nameLocalStorage ? JSON.parse(nameLocalStorage) : null
export const email = emailLocalStorage ? JSON.parse(emailLocalStorage) : null