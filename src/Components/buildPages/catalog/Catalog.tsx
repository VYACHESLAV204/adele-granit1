import { ICard } from '../../modules/маленькая карточка/Card'
import { FC, useEffect } from 'react'
import CardMain from '../../modules/большая карточка/CardMain'

interface ICatalogProps {
	category: { name: string; id: number }[]
	url?: string
	cardsArray: ICard[]
	setCardsArray: (value: ICard[]) => void
}
const Catalog: FC<ICatalogProps> = ({
	category,
	url,
	cardsArray,
	setCardsArray,
}) => {
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
	return (
		<div>
			<div>
				{category.map((cat) => (
					<h2 key={cat.id}>{cat.name}</h2>
				))}
			</div>

			<div>
				<CardMain />
			</div>
		</div>
	)
}

export default Catalog
//Из этой страницы будет весь каталог
