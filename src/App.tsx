import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ICard } from './Components/modules/маленькая карточка/Card.js'

import './App.css'
import Header from './Components/buildPages/Header/Header.js'
import Reg from './Components/modules/авторизация и регистрация/Reg.js'
import MainPage from './Components/buildPages/mainPage/MainPage.js'
import CardDetails from './Components/buildPages/cardinner/cardDetails.js'
import Catalog from './Components/buildPages/catalog/Catalog.js'
function App() {
	const [modalType, setModalType] = useState<'auth' | 'reg' | ''>('')
	const [isOpen, setIsOpen] = useState(false)
	const [citys, setCitys] = useState([])
	const [cardsArray, setCardsArray] = useState<ICard[]>([])
	useEffect(() => {
		fetch('http://192.168.1.71:6969/api/v1/citys')
			.then((response) => response.json())
			.then((data) => setCitys(data.city))
			.catch((error) => console.log(error))
	}, [])
	
	const category = ['Блоки', 'карьеры']
	return (
		<Router>
			<div>
				<Header
					citys={citys}
					setModalType={setModalType}
					setIsOpen={setIsOpen}
				/>
				<Reg
					modalType={modalType}
					setIsOpen={setIsOpen}
					isOpen={isOpen}
				/>

				<Routes>
					<Route
						path='/'
						element={<MainPage cardData= />}
					/>
					<Route
						path='/card/:id'
						element={<CardDetails cardData= />}
					/>
					<Route
						path='/catalog/'
						element={
							<Catalog
								cardsArray={cardsArray}
								setCardsArray={setCardsArray}
								category={category}
							/>
						}
					/>
				</Routes>
			</div>
		</Router>
	)
}
export default App
//Это основной компонент,если хочешь посмотреть какой-то блок,то замени им элемент MainPage Удалив cardData