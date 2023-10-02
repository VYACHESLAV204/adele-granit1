import Card from '../modules/Card'
import { FC } from 'react'

import s from './MainPage.module.css'
interface IpropsCard {
	cardData: {
		cardsAd: {
			img: string
			title: string
			price: string
			location: string
			id: number
		}[]
		simpleCard: {
			id: number
			img: string
			title: string
			price: string
			location: string
		}[]
	}
}
const MainPage: FC<IpropsCard> = ({ cardData }) => {
	const inlineStyles = {
		border: '3px solid #fff',
	}
	return (
		<div>
			<div className={s.MenuDiv}>
				<div>
					<p>Карьер</p>
				</div>

				<div>
					<p>Блоки</p>
				</div>
				<div>
					<p>Строй материалы</p>
				</div>
				<div>
					<p>Ритуальные изделия</p>
				</div>
				<div>
					<p>Станки</p>
				</div>
				<div>
					<p>Спец техника</p>
				</div>
				<div>
					<p>Работа</p>
				</div>
				<div>
					<p>Услуги</p>
				</div>
			</div>
			<div>
				<div className='container'>
					<div className='row'>
						<Card cardsAd={cardData.cardsAd} />
						<Card
							inlineStyles={inlineStyles}
							cardsAd={cardData.simpleCard}
						/>
					</div>
					<div className='column'>
						<Card cardsAd={cardData.cardsAd} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPage
