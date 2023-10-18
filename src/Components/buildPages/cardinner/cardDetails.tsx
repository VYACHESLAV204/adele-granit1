import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './cardDetails.module.css
import photo from '../../../assets/photoFromInnerCard.png'
import greenMoney from '../../../assets/greenmoney.svg'
import { IpropsCard } from '../mainPage/MainPage'
const CardDetails: FC<IpropsCard> = ({ cardData }) => {
	const { id } = useParams<{ id: string }>() // Keep it as string
	const numberId = Number(id) // convert string id to numaric id
	const thisCardFromAd = cardData.card1.find((card) => card.id === numberId)
	console.log(thisCardFromAd)

	//Логика если рекламные не рекламные не по ключу а в разных массивах
	// const thisCardFromSimple = cardData.find((card) => card.id === numberId)

	function returnActual() {
		if (thisCardFromAd) {
			const [showNumber, setShowNumber] = useState(false)
			return (
				<div className={s.mainDiv}>
					<div className={s.leftDiv}>
						<img src={photo} alt='' />
					</div>
					<div className={s.rightDiv}>
						<h2 className={s.H2Name}>Памятник 1</h2>
						<div className={s.priceBox}>
							<p className={s.price}>
								3900
							</p>
							<img style={{marginLeft: '1rem'}} src={greenMoney} alt="" />
						</div>
						<p className={s.aboutHeader}>Описание:</p>
						<p className={s.aboutText}>
						С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований с учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований 
						</p>
						<p className={s.organization}>ООО ХОУМ СТРОЙ</p>
						<div
							onClick={() => setShowNumber(!showNumber)}
							className={s.PhoneNumberDiv}
						>
							{showNumber ? (
								<p>+7 964 926 3214</p>
							) : (
								<p>Показать телефон</p>
							)}{' '}
						</div>
						<p className={s.City}>
							<span className={s.CitySpan}>Город:</span>
							Санкт-петербург, Адмиралтейская
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
