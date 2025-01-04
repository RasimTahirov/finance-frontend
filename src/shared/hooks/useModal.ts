import { useState } from 'react'

const useModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isModalOpenId, setIsModalOpenId] = useState<number | null>(null)

	const showModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const showModalCategory = (id: number) => {
		setIsModalOpen(true)
		setIsModalOpenId(id)
	}

	const closeModalCategory = () => {
		setIsModalOpen(false)
		setIsModalOpenId(null)
	}

	return {
		isModalOpen,
		setIsModalOpen,
		showModal,
		closeModal,
		isModalOpenId,
		showModalCategory,
		closeModalCategory,
	}
}

export default useModal
