const cardData = {
	cards: [
		{
			img: 'https://picsum.photos/210/168',
			title: 'Наименование услуги/товара или...',
			price: '800Р за услугу',
			location: 'Санкт-Петербург, Адмиралтейская',
		},
		{
			img: 'https://picsum.photos/210/168',
			title: 'Наименование услуги/товара или...',
			price: '800Р за услугу',
			location: 'Санкт-Петербург, Адмиралтейская',
		},
		{
			img: 'https://picsum.photos/210/168',
			title: 'Наименование услуги/товара или...',
			price: '800Р за услугу',
			location: 'Санкт-Петербург, Адмиралтейская',
		},
		{
			img: 'https://picsum.photos/210/168',
			title: 'Наименование услуги/товара или...',
			price: '800Р за услугу',
			location: 'Санкт-Петербург, Адмиралтейская',
		},
		{
			img: 'https://picsum.photos/210/168',
			title: 'Наименование услуги/товара или...',
			price: '800Р за услугу',
			location: 'Санкт-Петербург, Адмиралтейская',
		},
		{
			img: 'https://picsum.photos/210/168',
			title: 'Наименование услуги/товара или...',
			price: '800Р за услугу',
			location: 'Санкт-Петербург, Адмиралтейская',
		},
		{
			img: 'https://picsum.photos/210/168',
			title: 'Наименование услуги/товара или...',
			price: '800Р за услугу',
			location: 'Санкт-Петербург, Адмиралтейская',
		},
		{
			img: 'https://picsum.photos/210/168',
			title: 'Наименование услуги/товара или...',
			price: '800Р за услугу',
			location: 'Санкт-Петербург, Адмиралтейская',
		},
		{
			img: 'https://picsum.photos/210/168',
			title: 'Наименование услуги/товара или...',
			price: '800Р за услугу',
			location: 'Санкт-Петербург, Адмиралтейская',
		},
	],
}
import styles from './card.module.css'
const card = () => {
	return cardData.cards.map((item, index) => (
		<div className={styles.MainCardDiv} key={index}>
			<div className={styles.CardImgDiv}>
				<img src={item.img} alt={item.title} />
			</div>
			<div className={styles.CardInfoDiv}>
				<h3>{item.title}</h3>
				<p className={styles.CardInfoDivPrice}>{item.price}</p>
				<p>{item.location}</p>
			</div>
		</div>
	))
}

export default card
