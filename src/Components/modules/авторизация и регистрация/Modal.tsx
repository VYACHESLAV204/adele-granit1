import React, { ReactNode } from 'react'
import styles from './Modal.module.css'

interface ModalProps {
	children: ReactNode
	isOpen: boolean
	closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, closeModal }) => {
	if (!isOpen) {
		return null
	}

	return (
		<div className={styles.Modal}>
			<div className={styles.ModalContent}>
				{children}
				<button onClick={closeModal}>Закрыть</button>
			</div>
		</div>
	)
}

export default Modal
