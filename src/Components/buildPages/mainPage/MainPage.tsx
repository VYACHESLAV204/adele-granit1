import Card from '../../modules/маленькая карточка/Card'
import { FC } from 'react'
import { IpropsCard } from '../../interface and types/IpropsCard'
import s from './MainPage.module.css'
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
						<Card cardsAd={cardData.cards1} />
						<Card
							inlineStyles={inlineStyles}
							cardsAd={cardData.cards2}
						/>
					</div>
					<div className='column'>
						<Card cardsAd={cardData.cards1} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPage
