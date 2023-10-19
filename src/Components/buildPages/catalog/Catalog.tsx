import { CardAd } from '../../../interfaces/Interfaces'
import { FC, useEffect, useState } from 'react'
import CardMain from '../../modules/большая карточка/CardMain'
import Card from '../../modules/маленькая карточка/Card'
import ColumnCardsStyles from '../mainPage/MainPage.module.css'
import styles from './Catalog.module.css'

interface ICatalogProps {
	category: string
	sub_category: string
	cardsArray: CardAd[]
	setCardsArray: (value: CardAd[]) => void
}

const Catalog: FC<ICatalogProps> = ({
	category,
	sub_category,
	cardsArray,
	setCardsArray,
}) => {

	const [page, setPage] = useState(1)
	const CardsStylesColumn = {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
	}

	useEffect(() => {
		fetch('http://31.129.105.19/api/v1/index-category', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ category, sub_category, page }),
		})
			.then((data) => data.json())
			.then((data) => {
				if (data !== null) {
					setCardsArray(data)
				} else {
					setCardsArray([])
				}
			})
	}, [])
useEffect(() => {
  
	console.log(cardsArray);
}, [cardsArray])



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
