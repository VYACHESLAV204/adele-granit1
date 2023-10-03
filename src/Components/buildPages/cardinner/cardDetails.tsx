import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { IpropsCard } from '../../interface and types/IpropsCard'

const CardDetails: FC<IpropsCard> = ({ cardData }) => {
	const { id } = useParams<{ id: string }>() // Keep it as string

	const numberId = Number(id) // convert string id to numaric id

	const thisCardFromAd = cardData.cards1.find((card) => card.id === numberId)
	const thisCardFromSimple = cardData.cards2.find(
		(card) => card.id === numberId
	)

	console.log(thisCardFromAd, thisCardFromSimple)

	function returnActual() {
		if (thisCardFromAd) {
			return (
				<div>
					Card details for card ID: {thisCardFromAd?.id}
					<p>{thisCardFromAd?.price}</p>
				</div>
			)
		} else if (thisCardFromSimple) {
			return (
				<div>
					Card details for card ID: {thisCardFromSimple?.id}
					<p>{thisCardFromSimple?.price}</p>
				</div>
			)
		}
	}

	return returnActual()
}

export default CardDetails
//Тут внутренняя страница обьявления
