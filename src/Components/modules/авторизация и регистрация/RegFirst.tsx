import styles from './Reg.module.css'
type RegPropsFirst = {
	stage: number
	setStage: React.Dispatch<React.SetStateAction<number>>
	email: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
}
const RegFirst = (props: RegPropsFirst) => {
	function SendMail() {
		fetch('http://31.129.105.19/api/v1/send-mail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: props.email }),
		})
		.then(() => props.setStage(props.stage +1))
		.catch((Error) => alert(Error))
	}
	return (
		<div className={styles.MainDivFirstPopUp}>
			<div className={styles.innerDiv}>
				<h2 className={styles.H2text}>Регистрация</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault()
					
					}}
				>
					<input
						onChange={(e) => props.setEmail(e.target.value)}
						className={styles.InputEmail}
						type='email'
						placeholder='info@infomail.ru'
						required
					/>
					<button
						onClick={() => SendMail()}
						className={styles.Continue}
					>
						Продолжить
					</button>
				</form>
			</div>
		</div>
	)
}

export default RegFirst
