import styles from '../Reg/Reg.module.css'
import { useState, FormEvent } from 'react'

const Auth = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault()

		try {
			const response = await fetch(
				'http://192.168.1.71:6969/api/v1/login',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email, password }),
				}
			)
			const data = await response.json()
			console.log(data)
		} catch (error) {
			console.error(error) // Here you can handle the error
		}
	}

	return (
		<div className={styles.MainDivFirstPopUp}>
			<div className={styles.innerDiv}>
				<h2 className={styles.H2text}>Вход</h2>

				<form onSubmit={(e) => onSubmit(e)}>
					<input
						onChange={(e) => setEmail(e.target.value)}
						className={styles.InputEmail}
						type='email'
						placeholder='Электронная почта'
						required
					/>
					<input
						onChange={(e) => setPassword(e.target.value)}
						className={styles.InputEmail}
						type='password'
						placeholder='Пароль'
						required
					/>

					<button className={styles.Continue}>Продолжить</button>
				</form>
			</div>
		</div>
	)
}

export default Auth
