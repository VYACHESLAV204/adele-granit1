import styles from './Reg.module.css'
type RegPropsSecond = {
	stage: number
	setStage: React.Dispatch<React.SetStateAction<number>>
	email: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
}
export const RegSecond = (props: RegPropsSecond) => {
	return (
		<div className={styles.MainDivFirstPopUp}>
			<div className={styles.innerDiv}>
				<h2 className={styles.H2text}>Подтвердите электронную почту</h2>
				<p className={styles.PText}>
					В течении 2-х минут вам придет сообщение на ваш адрес
					электронной почты info@infomail.ru
				</p>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						props.setStage(props.stage + 1)
					}}
				>
					<input
						className={styles.InputEmail}
						type='text'
						required
						placeholder='Введите пароль из письма'
					/>
					<button className={styles.Continue}>Продолжить</button>
				</form>
			</div>
		</div>
	)
}
