import s from './Menu.module.css'
interface MenuProps {
	BurgerisOpen: boolean
	setBurgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Menu: React.FC<MenuProps> = ({ BurgerisOpen, setBurgerIsOpen }) => {
	const toggleMenu = () => {
		setBurgerIsOpen(!BurgerisOpen)
	}

	return (
		<div className={BurgerisOpen ? s.menuWrapperActive : s.menuWrapper}>
			<ul className={s.menu}>
				<li>Пункт меню 1</li>
				<li>Пункт меню 2</li>
				<li>Пункт меню 3</li>
			</ul>
			<button onClick={toggleMenu}>
				{BurgerisOpen ? 'Закрыть меню' : 'Открыть меню'}
			</button>
		</div>
	)
}

export default Menu
