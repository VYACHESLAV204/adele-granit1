import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import s from './cardDetails.module.css'
import photo from '../../../assets/photoFromInnerCard.png'
import greenMoney from '../../../assets/greenmoney.svg'
import { CardAd, CardAdResponse } from '../mainPage/MainPage'
const CardDetails: FC<CardAdResponse> = ({
	card_ads_1,
	card_ads_2,
	card_no_ads_1,
	card_no_ads_2,
}) => {
	const [This, setThis] = useState<CardAd>()
	const { id } = useParams<{ id: string }>() // Keep it as string
	const numberId = Number(id) // convert string id to numaric id
	useEffect(() => {
		const foundCard =
			card_ads_1.find((card) => card.id_card === numberId) ||
			card_ads_2.find((card) => card.id_card === numberId) ||
			card_no_ads_1.find((card) => card.id_card === numberId) ||
			card_no_ads_2.find((card) => card.id_card === numberId)
		if (foundCard) {
			setThis(foundCard)
		}
	}, [card_ads_1, card_ads_2, card_no_ads_1, card_no_ads_2, numberId])

	//Логика если рекламные не рекламные не по ключу а в разных массивах
	// const thisCardFromSimple = cardData.find((card) => card.id === numberId)

	function returnActual() {
		if (This) {
			const [showNumber, setShowNumber] = useState(false)
			return (
				<div className={s.mainDiv}>
					<div className={s.leftDiv}>
						<img src={photo} alt='' />
					</div>
					<div className={s.rightDiv}>
						<h2 className={s.H2Name}>{This.caption}</h2>
						<div className={s.priceBox}>
							<p className={s.price}>{This.price}</p>
							<img
								style={{ marginLeft: '1rem' }}
								src={greenMoney}
								alt=''
							/>
						</div>
						<p className={s.aboutHeader}>Описание:</p>
						<p className={s.aboutText}>{This.description}</p>
						<p className={s.organization}>{This.username}</p>
						<div
							onClick={() => setShowNumber(!showNumber)}
							className={s.PhoneNumberDiv}
						>
							{showNumber ? (
								<p>{This.phone}</p>
							) : (
								<p>Показать телефон</p>
							)}{' '}
						</div>
						<p className={s.City}>
							<span className={s.CitySpan}>Город:</span>
							{This.city}
						</p>
					</div>
				</div>
			)
		}
	}
	return returnActual()
}

export default CardDetails
//Тут внутренняя страница обьявления
