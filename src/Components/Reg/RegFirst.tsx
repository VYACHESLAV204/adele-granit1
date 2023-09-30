import styles from './Reg.module.css'
type RegPropsFirst = {
	stage: number
	setStage: React.Dispatch<React.SetStateAction<number>>
	email: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
}
const RegFirst = (props: RegPropsFirst) => {
	return (
		<div className={styles.MainDivFirstPopUp}>
			<div className={styles.innerDiv}>
				<h2 className={styles.H2text}>Регистрация</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						props.setStage(props.stage + 1)
					}}
				>
					<input
						onChange={(e) => props.setEmail(e.target.value)}
						className={styles.InputEmail}
						type='email'
						placeholder='info@infomail.ru'
						required
					/>
					<button className={styles.Continue}>Продолжить</button>
				</form>
			</div>
		</div>
	)
}

export default RegFirst
