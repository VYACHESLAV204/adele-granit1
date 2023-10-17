import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './cardDetails.module.css'
interface ICardDetailsProps {
	cardData: { title: string; price: string; info: string; id: number }[]
}
const CardDetails: FC<ICardDetailsProps> = ({ cardData }) => {
	const { id } = useParams<{ id: string }>() // Keep it as string

	const numberId = Number(id) // convert string id to numaric id

	const thisCardFromAd = cardData.find((card) => card.id === numberId)
	//Логика если рекламные не рекламные не по ключу а в разных массивах
	// const thisCardFromSimple = cardData.find((card) => card.id === numberId)

	function returnActual() {
		if (thisCardFromAd) {
			const [showNumber, setShowNumber] = useState(false)
			return (
				<div className={s.mainDiv}>
					<div className={s.leftDiv}>
						<img src='https://picsum.photos/316/323' alt='' />
					</div>
					<div className={s.rightDiv}>
						<h2 className={s.H2Name}>Памятник 1</h2>
						<p className={s.Price}>
							3900 <span>Р</span>
						</p>
						<p className={s.AboutHeader}>Описание:</p>
						<p className={s.AboutText}>
							С учётом сложившейся международной обстановки,
							перспективное планирование предоставляет широкие
							возможности для первоочередных требований...
						</p>
						<p className={s.Organization}>ООО ХОУМ СТРОЙ</p>
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
