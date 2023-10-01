import { useState } from 'react';
import './App.css'
import Header from './Components/Reg/Header/Header.js'
import Reg from './Components/Reg/Reg.js'

function App() {
	const [modalType, setModalType] = useState<'auth' | 'reg' | ''>('');
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div>
				<Header  setModalType={setModalType}  setIsOpen={setIsOpen}/>
				<Reg modalType={modalType} setIsOpen={setIsOpen} isOpen={isOpen}></Reg>
			</div>
		</>
	)
}

export default App
