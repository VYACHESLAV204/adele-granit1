import { useState } from 'react'
import s from './cardMain.module.css'
const CardMain = () => {
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
					С учётом сложившейся международной обстановки, перспективное
					планирование предоставляет широкие возможности для
					первоочередных требований...
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
					<span className={s.CitySpan}>Город:</span>Санкт-петербург,
					Адмиралтейская
				</p>
			</div>
		</div>
	)
}

export default CardMain
