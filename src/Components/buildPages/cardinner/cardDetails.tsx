import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './cardDetails.module.css'
import photo from '../../../assets/photoFromInnerCard.png'
import greenMoney from '../../../assets/greenmoney.svg'
import { CardAd } from '../../../interfaces/Interfaces'
import { CardAdResponse } from '../../../interfaces/Interfaces'
const CardDetails: FC<CardAdResponse> = ({
	card_ads_1,
	card_ads_2,
	card_no_ads,
}) => {
	const [showNumber, setShowNumber] = useState(false)
	const [thisState, setThis] = useState<CardAd>();
	const { id } = useParams<{ id: string }>() // Keep it as string
	const numberId = Number(id) // convert string id to numaric id
	
	useEffect(() => {
		let matchedCard = card_ads_1?.find((card) => card.id_card === numberId)
		if (!matchedCard) {
			matchedCard = card_ads_2?.find((card) => card.id_card === numberId)
		}
		if (!matchedCard) {
			matchedCard = card_no_ads?.find((card) => card.id_card === numberId)
		}
		setThis(matchedCard)
	}, [card_ads_1, card_ads_2, card_no_ads, numberId])
useEffect(() => {
console.log(thisState)
}, [thisState])
const files = thisState && thisState.path_file && thisState.path_file.split(',')


	return(
		
				<div className={s.mainDiv}>
					<div className={s.leftDiv}>
					{files && files[0] && <img src={files[0]} alt='' className={s.Img}/>}
					</div>
					<div className={s.rightDiv}>
						<h2 className={s.H2Name}>{thisState?.caption}</h2>
						<div className={s.priceBox}>
							<p className={s.price}>{thisState?.price}</p>
							<img
								style={{ marginLeft: '1rem' }}
								src={greenMoney}
								alt=''
							/>
						</div>
						<p className={s.aboutHeader}>Описание:</p>
						<p className={s.aboutText}>
							{thisState?.description}
						</p>
						<p className={s.organization}>{thisState?.username}</p>
						<div
							onClick={() => setShowNumber(!showNumber)}
							className={s.PhoneNumberDiv}
						>
							{showNumber ? (
								<p>{thisState?.phone}</p>
							) : (
								<p>Показать телефон</p>
							)}{' '}
						</div>
						<p className={s.City}>
							<span className={s.CitySpan}>Город:</span>
							{thisState?.city}
						</p>
					</div>
				</div>
			)
		}



	
	


export default CardDetails
//Тут внутренняя страница обьявления
