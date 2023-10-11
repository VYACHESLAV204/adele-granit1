import greenMoney from '../../../assets/greenmoney.svg'
import s from './NewCard.module.css'
interface InewCardProps {
	category: string
	underCategory: string
}
const NewCard: React.FC<InewCardProps> = ({ category, underCategory }) => {
	return (
		<div className={s.MainDiv}>
			<h2 className={s.H2Cat}>Категория</h2>

			<form action=''>
				<div className={s.SelectCatDiv}>
					<label htmlFor='Category'>
						Выберите категорию объявления:
					</label>
					<input
						type='text'
						id='Category'
						value={category}
						placeholder={category}
					/>
				</div>
				<div className={s.SelectCatDiv}>
					<label htmlFor='underCategory'>
						Выберите подкатегорию обьявления:
					</label>
					<input
						type='text'
						id='underCategory'
						value={underCategory}
						placeholder={underCategory}
					/>
				</div>
				<div className={s.setTitle}>
					<label htmlFor='title'>Заголовок объявления:</label>
					<input
						id='title'
						placeholder='Например: Обработка камня'
						type='text'
					/>
				</div>
				<div className={s.description}>
					<label htmlFor='description'>Описание объявления</label>
					<textarea
						name='description'
						id='description'
						cols={30}
						rows={10}
						placeholder='Расскажите здесь более подробно о вашем объявлении'
					></textarea>
				</div>
				<div>
					<h4>Фотографии</h4>
					<p>Не более 5 фото</p>
					{/* Добавить фото */}
				</div>
				<div>
					<label htmlFor=''>Цена:</label>
					<div>
						<input type='text' placeholder='12 500' />
						<img src={greenMoney} alt='' />
					</div>
					<div>
						<p>Контактные данные в объявлении</p>
						<p>Телефон</p>
						<input type='number' placeholder='+7 123 456 78 90' />
					</div>
					<div>
						<h2>Выбор тарифа оплаты объявления</h2>
						<div>
							<div>
								<h3></h3>
								<p></p>
								<p></p>
							</div>
							<div>
								<h3></h3>
								<p></p>
								<p></p>
							</div>
							<div>
								<div>
									<input type='checkbox' required />
									<p>
										Я согласен с политикой обработки
										пресональных данных
									</p>
								</div>
								<div>
									<input type='checkbox' required />
									<p>
										Подтверждаю согласие на обработку и
										размещение объявления
									</p>
								</div>
								<button>Разместить обьявление</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default NewCard
