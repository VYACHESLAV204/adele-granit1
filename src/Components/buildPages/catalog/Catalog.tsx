import { CardAd } from '../mainPage/MainPage'
import { FC, useEffect } from 'react'
import CardMain from '../../modules/большая карточка/CardMain'
import Card from '../../modules/маленькая карточка/Card'
import ColumnCardsStyles from '../mainPage/MainPage.module.css'
import styles from './Catalog.module.css'

interface ICatalogProps {
	category: { name: string; id: number }[]
	cardsArray: CardAd[]
}
const Catalog: FC<ICatalogProps> = ({ cardsArray }) => {
	const CardsStylesColumn = {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
	}

	const Cat = [
		'Прямоугольные',
		'Фигурные',
		'Эксклюзивные',
		'Цоколя',
		'Плиты',
		'Гранит',
		'Мрамор',
	]
	const styleClasses = [
		styles.OneCat,
		styles.TwoCat,
		styles.ThreeCat,
		styles.FourCat,
		styles.FiveCat,
		styles.SixCat,
		styles.SevenCat,
	]

	return (
		<div style={{}}>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				<h2 className={styles.H2NameOfCategory}>Блоки</h2>
				<div style={{ marginRight: 65 }}>
					<div className={styles.CatDiv}>
						{Cat.map((Cat, index) => {
							const styleClass =
								styleClasses[index % styleClasses.length]
							return (
								<div key={index} className={styleClass}>
									<p className={styles.CatText}>{Cat}</p>
								</div>
							)
						})}
					</div>
					<div style={{ marginTop: 15 }}>
						<CardMain />
						<CardMain />
						<CardMain />
						<CardMain />
						<CardMain />
						<CardMain />
					</div>
				</div>
				<div
					style={{ marginTop: -50 }}
					className={ColumnCardsStyles.AdCardsDiv}
				>
					<h2 className={ColumnCardsStyles.H2BestPractique}>
						Лучшие предложения:
					</h2>
					<Card
						cardsStyles={CardsStylesColumn}
						cardsAd={cardsArray}
					/>
				</div>
			</div>
		</div>
	)
}

export default Catalog
