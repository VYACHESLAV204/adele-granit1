import { Link } from 'react-router-dom'
import styles from './card.module.css'
import { FC } from 'react'

interface Card {
	img: string
	title: string
	price: string
	location: string
	id: number
}

const Card: FC<{ cardsAd: Card[]; inlineStyles?: Record<string, string> }> = ({
	cardsAd,
	inlineStyles,
}) => {
	return (
		<div>
			{cardsAd.map((item, index) => (
				<Link to={`/card/${item.id}`} key={index} style={inlineStyles}>
					<div style={inlineStyles} className={styles.MainCardDiv}>
						<div className={styles.CardImgDiv}>
							<img src={item.img} alt={item.title} />
						</div>
						<div className={styles.CardInfoDiv}>
							<h3>{item.title}</h3>
							<p className={styles.CardInfoDivPrice}>
								{item.price}
							</p>
							<p>{item.location}</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Card
