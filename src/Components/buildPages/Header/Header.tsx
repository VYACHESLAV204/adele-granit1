import styles from './Header.module.css'
import { useState } from 'react'
import Select from 'react-select'
import logo from '../../../assets/logo.svg'
import geoForHeader from '../../../assets/geoForHeader.svg'
import HeaderMenu3Line from '../../../assets/HeaderMenu3Line.svg'
import InputButton from '../../modules/Поиск в шапке/Search'
type HeaderProps = {
	setModalType: React.Dispatch<React.SetStateAction<'auth' | 'reg' | ''>>
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	citys: { label: string; value: string }[]
}

const Header: React.FC<HeaderProps> = ({ setModalType, setIsOpen, citys }) => {
	type OptionType = { label: string; value: string }

	function RegionSelect() {
		// Состояние для выбранного региона
		const [selectedRegion, setSelectedRegion] = useState<OptionType>(
			citys[0]
		)

		const handleChange = (
			selectedOption: OptionType | null,
			_actionMeta: any
		) => {
			if (selectedOption !== null) {
				setSelectedRegion(selectedOption)
			}
		}
		return (
			<div className={styles.RegionDiv}>
				<img src={geoForHeader} alt='' />
				<Select
					value={selectedRegion}
					options={citys}
					onChange={handleChange}
					styles={{
						control: (base) => ({
							...base,
							marginLeft: 10,
							width: 160, // Устанавливаем заданную ширину
						}),
					}}
				/>
			</div>
		)
	}

	return (
		<div className={styles.MainDiv}>
			<img src={logo} alt='Логотип' />
			{RegionSelect()}
			<div className={styles.BurgerMenu}>
				<button>
					<img src={HeaderMenu3Line} alt='' />
				</button>
				<h2>Все категории</h2>
			</div>
			<div className={styles.searchContainer}>
				<InputButton />
			</div>
			<div>
				<button className={styles.NewAdd}>Разместить обьявление</button>
			</div>
			<div className={styles.signInIpDiv}>
				<button
					className={styles.signInIp}
					onClick={() => {
						setModalType('auth')
						setIsOpen(true)
					}}
				>
					Вход
				</button>
				<p className={styles.signInIpP}>и</p>
				<button
					className={styles.signInIp}
					onClick={() => {
						setModalType('reg')
						setIsOpen(true)
					}}
				>
					Регистрация
				</button>
			</div>
		</div>
	)
}
export default Header
