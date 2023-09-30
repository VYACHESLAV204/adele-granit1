import React from 'react'
import RegFirst from './RegFirst'
import { RegSecond } from './RegSecond'
import RegThird from './RegThird'

type RegProps = {
	stage: number
	setStage: React.Dispatch<React.SetStateAction<number>>
	email: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
	isLegalEntity: 'Физическое лицо' | 'Юридическое лицо'
	setIsLegalEntity: React.Dispatch<
		React.SetStateAction<'Физическое лицо' | 'Юридическое лицо'>
	>
}

const Reg: React.FC<RegProps> = ({
	stage,
	setStage,
	email,
	setEmail,
	isLegalEntity,
	setIsLegalEntity,
}) => {
	if (stage === 1) {
		return (
			<>
				<RegFirst
					stage={stage}
					setStage={setStage}
					email={email}
					setEmail={setEmail}
				/>
			</>
		)
	} else if (stage === 2) {
		return (
			<>
				<RegSecond
					stage={stage}
					setStage={setStage}
					email={email}
					setEmail={setEmail}
				/>
			</>
		)
	} else if (stage === 3) {
		return (
			<>
				<RegThird
					stage={stage}
					setStage={setStage}
					email={email}
					setEmail={setEmail}
					isLegalEntity={isLegalEntity}
					setIsLegalEntity={setIsLegalEntity}
				/>
			</>
		)
	}
}

export default Reg
