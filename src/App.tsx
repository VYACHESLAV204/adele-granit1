import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ICard } from './Components/modules/маленькая карточка/Card.js'

import './App.css'

import MainPage from './Components/buildPages/mainPage/MainPage.js'
import CardDetails from './Components/buildPages/cardinner/cardDetails.js'
import Catalog from './Components/buildPages/catalog/Catalog.js'
import Layout from './Components/buildPages/Layout.js'
import NewCard from './Components/buildPages/newCard/NewCard.js'
import Profile from './Components/buildPages/profileSetup/Profile.js'

function App() {
	const [modalType, setModalType] = useState<'auth' | 'reg' | ''>('')
	const [isOpen, setIsOpen] = useState(false)
	const [citys, setCitys] = useState([])
	const [cardsArray, setCardsArray] = useState<ICard[]>([])
	const [categoryForNewCard, setCategoryForNewCard] = useState('')
	const [underCategoryForNewCard, setUnderCategoryForNewCard] = useState('')
	useEffect(() => {
		fetch('http://192.168.118.162:6969/api/v1/citys')
			.then((response) => response.json())
			.then((data) => setCitys(data.city))
			.then((data) => console.log(data)
			)
			.catch((error) => console.log(error))
	}, [])
	useEffect(() => {
		console.log(categoryForNewCard, underCategoryForNewCard)
	}, [categoryForNewCard, underCategoryForNewCard])

	const category = [
		{ name: 'Блоки', id: 1 },
		{ name: 'Ритуальные услуги', id: 2 },
	]
	const cardData = [
		{
			title: 'jasjkdopsakd',
			price: '3600',
			info: 'kodaksopjkepofkasdofkpoewakfposakfpokaf',
		},
		{
			title: 'jasjkdopsakd',
			price: '3600',
			info: 'kodaksopjkepofkasdofkpoewakfposakfpokaf',
		},
		{
			title: 'jasjkdopsakd',
			price: '3600',
			info: 'kodaksopjkepofkasdofkpoewakfposakfpokaf',
		},
		{
			title: 'jasjkdopsakd',
			price: '3600',
			info: 'kodaksopjkepofkasdofkpoewakfposakfpokaf',
		},
	]
	return (
		<Router>
			<div>
				<Layout
					citys={citys}
					setModalType={setModalType}
					setIsOpen={setIsOpen}
					isOpen={isOpen}
					modalType={modalType}
					setCategory={setCategoryForNewCard}
					setUnderCategory={setUnderCategoryForNewCard}
				>
					<Routes>
						<Route
							path='/'
							element={<MainPage cardData={cardData} />}
						/>
						<Route
							path='/card/:id'
							element={<CardDetails cardData={cardData} />}
						/>
						<Route
							path='/catalog/'
							element={
								<Catalog
									cardsArray={cardData}
									setCardsArray={setCardsArray}
									category={category}
								/>
							}
						/>
						<Route
							path='/new-card/'
							element={
								<NewCard
									category={categoryForNewCard}
									underCategory={underCategoryForNewCard}
								/>
							}
						/>
						<Route
							path='/profile/'
							element={<Profile citys={citys} />}
						/>
					</Routes>
				</Layout>
			</div>
		</Router>
	)
}
export default App
//Это основной компонент,если хочешь посмотреть какой-то блок,то замени им элемент MainPage Удалив cardData
