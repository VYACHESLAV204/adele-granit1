import { useState } from 'react'
import './App.css'
import Reg from './Components/Reg/Reg.js'

function App() {
	const [stage, setStage] = useState(1)
	const [email, setEmail] = useState('')
	const [isLegalEntity, setIsLegalEntity] = useState<
		'Физическое лицо' | 'Юридическое лицо'
	>('Физическое лицо')
	return (
		<>
			<Reg
				stage={stage}
				setStage={setStage}
				email={email}
				setEmail={setEmail}
				isLegalEntity={isLegalEntity}
				setIsLegalEntity={setIsLegalEntity}
			></Reg>
		</>
	)
}

export default App
