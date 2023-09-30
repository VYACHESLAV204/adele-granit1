import styles from './Reg.module.css'
type RegPropsThird = {
	stage: number
	setStage: React.Dispatch<React.SetStateAction<number>>
	email: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
	isLegalEntity: 'Физическое лицо' | 'Юридическое лицо'
	setIsLegalEntity: React.Dispatch<
		React.SetStateAction<'Физическое лицо' | 'Юридическое лицо'>
	>
}
const RegThird = (props: RegPropsThird) => {
	return (
		<div className={styles.MainDivFirstPopUp}>
			<h2 className={styles.H2text}>Регистрация</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					props.setStage(props.stage + 1)
				}}
			>
				<div className={styles.selectDiv}>
					<label className={styles.label} htmlFor='1'>
						Тип субъекта
					</label>
					<select
						className={styles.TypeSelect}
						onChange={(event) =>
							props.setIsLegalEntity(
								event.target.value as
									| 'Физическое лицо'
									| 'Юридическое лицо'
							)
						}
						id='1'
					>
						<option value='Физическое лицо'>Физическое лицо</option>
						<option value='Юридическое лицо'>
							Юридическое лицо
						</option>
					</select>
				</div>
				<div>
					<input
						className={styles.InputEmail}
						type='text'
						placeholder='Имя профиля'
						required
					/>
					<input
						className={styles.InputEmail}
						type='number'
						placeholder='Телефон'
						required
					/>
					<input
						className={styles.InputEmail}
						type='password'
						placeholder='Пароль'
						required
					/>
					{props.isLegalEntity === 'Юридическое лицо' && (
						<input
							required
							type='number'
							className={styles.InputEmail}
							placeholder='ИНН'
						/>
					)}
				</div>
				<button className={styles.Continue}>Продолжить</button>
			</form>
		</div>
	)
}

export default RegThird
