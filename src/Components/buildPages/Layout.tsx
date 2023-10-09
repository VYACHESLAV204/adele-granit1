import React from 'react'
import Footer from './footer/Footer'
import Header from './Header/Header'
import Reg from '../modules/авторизация и регистрация/Reg'
interface HeaderProps {
	children?: React.ReactNode
	citys: any[]
	setModalType: (value: React.SetStateAction<'auth' | 'reg' | ''>) => void
	setIsOpen: (value: React.SetStateAction<boolean>) => void
	modalType: 'auth' | 'reg' | ''
	isOpen: boolean
}
const Layout: React.FC<HeaderProps> = ({
	citys,
	setModalType,
	setIsOpen,
	modalType,
	isOpen,
	children,
}) => {
	return (
		<>
			<Header
				setIsOpen={setIsOpen}
				setModalType={setModalType}
				citys={citys}
			/>

			<Reg setIsOpen={setIsOpen} modalType={modalType} isOpen={isOpen} />
			<Footer children={children} />
		</>
	)
}

export default Layout
