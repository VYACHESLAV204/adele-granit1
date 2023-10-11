import React, { useState } from 'react'
import s from './Menu.module.css'
import MenuArrow from '../../../assets/Menu arrow.svg'

interface MenuProps {
	BurgerisOpen: boolean
	setBurgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu: React.FC<MenuProps> = ({ BurgerisOpen, setBurgerIsOpen }) => {
	const toggleMenu = () => {
		setBurgerIsOpen(!BurgerisOpen)
	}
	const [hover, setHover] = useState(false)
	const [submenu, setSubmenu] = useState(false)
	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className={BurgerisOpen ? s.menuWrapperActive : s.menuWrapper}
		>
			<div className={s.MainDiv}>
				<div className='1'>
					<ul className={s.menu}>
						<li>
							<div className={s.MenuOnceDiv}>
								<h2>Карьер</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu ? s.submenuActive : s.submenu
								}
							>
								<div className={s.MenuOnceDiv}>
									<li>Карьер</li>
									<img src={MenuArrow} alt='' />
								</div>
							</ul>
						</li>
						<li>
							<div className={s.MenuOnceDiv}>
								<h2>Блоки</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu ? s.submenuActive : s.submenu
								}
							>
								<div
									onClick={() => setHover(!hover)}
									className={s.MenuOnceDiv3}
								>
									<li>Блоки</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<div>
									<ul
										className={
											hover
												? s.InnerLiVisible
												: s.InnerLiHidden
										}
									>
										<li>Гранит</li>
										<li>Мрамор</li>
										<li>Покупают</li>
										<li>Продают</li>
									</ul>
								</div>
							</ul>
						</li>
						<li>
							<div className={s.MenuOnceDiv}>
								<h2>Строй материалы</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu ? s.submenuActive : s.submenu
								}
							>
								<div
									onClick={() => setHover(!hover)}
									className={s.MenuOnceDiv3}
								>
									<li>Строй материалы</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<ul
									className={
										hover
											? s.InnerLiVisible
											: s.InnerLiHidden
									}
								>
									<li>Гранит</li>
									<li>Мрамор</li>
									<li>Покупают</li>
									<li>Продают</li>
								</ul>
							</ul>
						</li>
						<li>
							<div className={s.MenuOnceDiv}>
								<h2>Ритуальные изделия</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu ? s.submenuActive : s.submenu
								}
							>
								<div
									onClick={() => setHover(!hover)}
									className={s.MenuOnceDiv3}
								>
									<li>Ритуальные изделия</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<ul
									className={
										hover
											? s.InnerLiVisible
											: s.InnerLiHidden
									}
								>
									<li>Прямоугольные</li>
									<li>Фигурные</li>
									<li>Эксклюзивные</li>
									<li>Цоколя</li>
									<li>Плиты</li>
									<li>Гранит</li>
									<li>Мрамор</li>
								</ul>
							</ul>
						</li>
						<li>
							<div className={s.MenuOnceDiv}>
								<h2>Станки</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu ? s.submenuActive : s.submenu
								}
							>
								<div
									onClick={() => setHover(!hover)}
									className={s.MenuOnceDiv3}
								>
									<li>Станки</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<ul
									className={
										hover
											? s.InnerLiVisible
											: s.InnerLiHidden
									}
								>
									<li>Для карьера</li>
									<li>Для производства</li>
								</ul>
							</ul>
						</li>
						<li>
							<div className={s.MenuOnceDiv}>
								<h2>Инструменты</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu ? s.submenuActive : s.submenu
								}
							>
								<div className={s.MenuOnceDiv}>
									<li>Инструменты</li>
									<img src={MenuArrow} alt='' />
								</div>
							</ul>
						</li>
						<li>
							<div className={s.MenuOnceDiv}>
								<h2>Спец техника</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu ? s.submenuActive : s.submenu
								}
							>
								<div
									onClick={() => setHover(!hover)}
									className={s.MenuOnceDiv3}
								>
									<li>Спец техника</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<ul
									className={
										hover
											? s.InnerLiVisible
											: s.InnerLiHidden
									}
								>
									<li>Новая техника</li>
									<li>Б/У техника</li>
								</ul>
							</ul>
						</li>
						<li>
							<div className={s.MenuOnceDiv}>
								<h2>Работа</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu ? s.submenuActive : s.submenu
								}
							>
								<div
									onClick={() => setHover(!hover)}
									className={s.MenuOnceDiv3}
								>
									<li>Работа</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<ul
									className={
										hover
											? s.InnerLiVisible
											: s.InnerLiHidden
									}
								>
									<li>Ищу работу</li>
									<li>Ищу сотрудника</li>
									<li>Резюме</li>
								</ul>
							</ul>
						</li>
						<li>
							<div className={s.MenuOnceDiv}>
								<h2>Услуги</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu ? s.submenuActive : s.submenu
								}
							>
								<div
									onClick={() => setHover(!hover)}
									className={s.MenuOnceDiv3}
								>
									<li>Услуги</li>

									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<ul
									className={
										hover
											? s.InnerLiVisible
											: s.InnerLiHidden
									}
								>
									<li>Ремонт</li>
									<li>Резка камня</li>
									<li>Полировка</li>
									<li>Напайка сегментов</li>
									<li>Перевозка</li>
								</ul>
							</ul>
						</li>
					</ul>
				</div>
				<div className={s.line}></div>
			</div>
			<button onClick={toggleMenu}>
				{BurgerisOpen ? 'Закрыть меню' : 'Открыть меню'}
			</button>
		</div>
	)
}

export default Menu
