import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './Components/Reg/Header/Header.js'
import Reg from './Components/Reg/Reg.js'
import MainPage from './Components/buildPages/MainPage.js'
import CardDetails from './Components/buildPages/cardDetails.js'
function App() {
	const [modalType, setModalType] = useState<'auth' | 'reg' | ''>('')
	const [isOpen, setIsOpen] = useState(false)
	const [citys, setCitys] = useState([])
	useEffect(() => {
		fetch('http://192.168.1.71:6969/api/v1/citys')
			.then((response) => response.json())
			.then((data) => setCitys(data.city))
	}, [])
	console.log(citys)
	const cardData = {
		cardsAd: [
			{
				id: 1,
				img: 'https://picsum.photos/210/168',
				title: 'Наименование услуги/товара или...',
				price: '800Р за услугу',
				location: 'Санкт-Петербург, Адмиралтейская',
			},
			{
				id: 2,
				img: 'https://picsum.photos/210/168',
				title: 'Наименование услуги/товара или...',
				price: '800Р за услугу',
				location: 'Санкт-Петербург, Адмиралтейская',
			},
			{
				id: 3,
				img: 'https://picsum.photos/210/168',
				title: 'Наименование услуги/товара или...',
				price: '800Р за услугу',
				location: 'Санкт-Петербург, Адмиралтейская',
			},
			{
				id: 4,
				img: 'https://picsum.photos/210/168',
				title: 'Наименование услуги/товара или...',
				price: '800Р за услугу',
				location: 'Санкт-Петербург, Адмиралтейская',
			},
		],
		simpleCard: [
			{
				id: 5,
				img: 'https://picsum.photos/210/168',
				title: 'Наименование услуги/товара или...',
				price: '800Р за услугу',
				location: 'Санкт-Петербург, Адмиралтейская',
			},
			{
				id: 6,
				img: 'https://picsum.photos/210/168',
				title: 'Наименование услуги/товара или...',
				price: '800Р за услугу',
				location: 'Санкт-Петербург, Адмиралтейская',
			},
			{
				id: 7,
				img: 'https://picsum.photos/210/168',
				title: 'Наименование услуги/товара или...',
				price: '800Р за услугу',
				location: 'Санкт-Петербург, Адмиралтейская',
			},
			{
				id: 8,
				img: 'https://picsum.photos/210/168',
				title: 'Наименование услуги/товара или...',
				price: '800Р за услугу',
				location: 'Санкт-Петербург, Адмиралтейская',
			},
			{
				id: 9,
				img: 'https://picsum.photos/210/168',
				title: 'Наименование услуги/товара или...',
				price: '800Р за услугу',
				location: 'Санкт-Петербург, Адмиралтейская',
			},
			{
				id: 10,
				img: 'https://picsum.photos/210/168',
				title: 'Наименование услуги/товара или...',
				price: '800Р за услугу',
				location: 'Санкт-Петербург, Адмиралтейская',
			},
			{
				id: 11,
				img: 'https://picsum.photos/210/168',
				title: 'Наименование услуги/товара или...',
				price: '800Р за услугу',
				location: 'Санкт-Петербург, Адмиралтейская',
			},
			{
				id: 12,
				img: 'https://picsum.photos/210/168',
				title: 'Наименование услуги/товара или...',
				price: '800Р за услугу',
				location: 'Санкт-Петербург, Адмиралтейская',
			},
		],
	}
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
						element={<MainPage cardData={cardData} />}
					/>
					<Route
						path='/card/:id'
						element={<CardDetails cardData={cardData} />}
					/>
				</Routes>
			</div>
		</Router>
	)
}
export default App
