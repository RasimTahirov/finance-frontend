import { XMarkIcon } from '@heroicons/react/16/solid'
import { Modal } from 'antd'
import { FC, ReactNode } from 'react'

interface PopupProps {
	children: ReactNode
	isModalOpen: boolean
	closeModal: () => void
}

const Popup: FC<PopupProps> = ({ children, isModalOpen, closeModal }) => {
	return (
		<Modal
			open={isModalOpen}
			onCancel={closeModal}
			footer={null}
			closable={false}
      className='w-full'
		>
			<div>
				<XMarkIcon
					onClick={closeModal}
					className="absolute w-5 right-5 cursor-pointer"
				/>
			</div>
			{children}
		</Modal>
	)
}

export default Popup
