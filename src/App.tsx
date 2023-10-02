import { useState,useEffect } from 'react';
import './App.css'
import Header from './Components/Reg/Header/Header.js'
import Reg from './Components/Reg/Reg.js'
import Card from './Components/katalog/card.js';

function App() {
	const [modalType, setModalType] = useState<'auth' | 'reg' | ''>('');
	const [isOpen, setIsOpen] = useState(false);
	const [citys, setCitys] = useState([])
	useEffect(() => {
	fetch('http://192.168.1.71:6969/api/v1/citys')
	.then((response) => response.json())
	.then((data) => setCitys(data.city))
	}, [])
	console.log(citys);
	
	return (
		<>
			<div>
				<Header citys={citys} setModalType={setModalType}  setIsOpen={setIsOpen}/>
				<Reg modalType={modalType} setIsOpen={setIsOpen} isOpen={isOpen}></Reg>
				<Card/>
			</div>
		</>
	)
}

export default App
