import RegFirst from './RegFirst'
import { RegSecond } from './RegSecond'
import RegThird from './RegThird'
import { useState } from 'react'
import Modal from './Modal'
import Auth from './Auth'

const Reg: React.FC = () => {
	const [stage, setStage] = useState(1);
	const [email, setEmail] = useState('');
	const [modalType, setModalType] = useState<'auth' | 'reg' | ''>('');
	const [isOpen, setIsOpen] = useState(false);
	const [isLegalEntity, setIsLegalEntity] = useState<'Физическое лицо' | 'Юридическое лицо'>('Физическое лицо');

	return (
		<>
			<button onClick={() => { setModalType('auth'); setIsOpen(true); }}>Авторизация</button>
			<button onClick={() => { setModalType('reg'); setIsOpen(true); }}>Регистрация</button>
			<Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
				{modalType === 'auth' && <Auth />}
				{modalType === 'reg' && (
					<>
						{stage === 1 && (
							<RegFirst
								stage={stage}
								setStage={setStage}
								email={email}
								setEmail={setEmail}
							/>
						)}
						{stage === 2 && (
							<RegSecond
								stage={stage}
								setStage={setStage}
								email={email}
								setEmail={setEmail}
							/>
						)}
						{stage === 3 && (
							<RegThird
								stage={stage}
								setStage={setStage}
								email={email}
								setEmail={setEmail}
								isLegalEntity={isLegalEntity}
								setIsLegalEntity={setIsLegalEntity}
							/>
						)}
					</>
				)}
			</Modal>
		</>
	)
}

export default Reg