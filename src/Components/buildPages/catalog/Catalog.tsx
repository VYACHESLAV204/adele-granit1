import { ICard } from '../../modules/маленькая карточка/Card'
import { FC, useEffect } from 'react'
import CardMain from '../../modules/большая карточка/CardMain'
import Card from '../../modules/маленькая карточка/Card'
import ColumnCardsStyles from '../mainPage/MainPage.module.css'
import styles from './Catalog.module.css'

interface ICatalogProps {
	category: { name: string; id: number }[]
	url?: string
	cardsArray: ICard[]
	setCardsArray: (value: ICard[]) => void
}
const Catalog: FC<ICatalogProps> = ({

	url,
	cardsArray,
	setCardsArray,
}) => {
	const CardsStylesColumn = {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
	}
	useEffect(() => {
		fetch('https://kfosdkfopsdkgopdfmokfoeko/sddfsdf/dsgsdgs/ddsge', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ url }),
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
