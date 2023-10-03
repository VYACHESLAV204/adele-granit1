import s from './cardMain.module.css'
const CardMain = () => {
	return (
		<div className={s.mainDiv}>
			<div className={s.leftDiv}>
				<div className={s.leftHeaderDiv}>
					<img src='' alt='' />
				</div>
				<div className={s.leftBottomDiv}>
					<h2>ООО ХОУМ СТРОЙ</h2>
					<div>
						<p>Показать телефон</p>
					</div>
				</div>
			</div>
			<div className={s.rightDiv}>
				<h2>Памятник 1</h2>
				<p>3900 Р</p>
				<p>Описание:</p>
				<p>
					С учётом сложившейся международной обстановки, перспективное
					планирование предоставляет широкие возможности для
					первоочередных требований...
				</p>
				<p>Город:Санкт-петербург, Адмиралтейская</p>
			</div>
		</div>
	)
}

export default CardMain
