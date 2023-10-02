import { FC } from 'react'
import { useParams } from 'react-router-dom'

interface IpropsCard {
	cardData: {
		cardsAd: {
			img: string
			title: string
			price: string
			location: string
			id?: number
		}[]
		simpleCard: {
			id?: number
			img: string
			title: string
			price: string
			location: string
		}[]
	}
}

const CardDetails: FC<IpropsCard> = ({ cardData }) => {
	const { id } = useParams<{ id: string }>() // Add type assertion here

	const thisCardFromAd = cardData.cardsAd.find((card) => card.id == id) // Use id1 here which is a number
	const thisCardFromSimple = cardData.simpleCard.find((card) => card.id == id) // Use id1 here which is a number
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
