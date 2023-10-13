import React, { useState } from 'react'
import s from './Menu.module.css'
import MenuArrow from '../../../assets/Menu arrow.svg'

interface MenuProps {
	BurgerisOpen: boolean
	setBurgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>

	setCategory: (value: React.SetStateAction<string>) => void
	setUnderCategory: (value: React.SetStateAction<string>) => void
}

const Menu: React.FC<MenuProps> = ({
	BurgerisOpen,
	setBurgerIsOpen,
	setCategory,
	setUnderCategory,
}) => {
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
									<li onClick={() => setCategory('Карьер')}>
										Карьер
									</li>
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
										<li
											onClick={() => {
												setUnderCategory('Гранит'),
													setCategory('Блоки')
											}}
										>
											Гранит
										</li>
										<li
											onClick={() => {
												setUnderCategory('Мрамор'),
													setCategory('Блоки')
											}}
										>
											Мрамор
										</li>
										<li
											onClick={() => {
												setUnderCategory('Покупают'),
													setCategory('Блоки')
											}}
										>
											Покупают
										</li>
										<li
											onClick={() => {
												setUnderCategory('Продают'),
													setCategory('Блоки')
											}}
										>
											Продают
										</li>
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
									<li
										onClick={() => {
											setUnderCategory('Гранит'),
												setCategory('Строй материалы')
										}}
									>
										Гранит
									</li>
									<li
										onClick={() => {
											setUnderCategory('Мрамор'),
												setCategory('Строй материалы')
										}}
									>
										Мрамор
									</li>
									<li
										onClick={() => {
											setUnderCategory('Покупают'),
												setCategory('Строй материалы')
										}}
									>
										Покупают
									</li>
									<li
										onClick={() => {
											setUnderCategory('Продают'),
												setCategory('Строй материалы')
										}}
									>
										Продают
									</li>
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
									<li
										onClick={() => {
											setUnderCategory('Прямоугольные'),
												setCategory(
													'Ритуальные изделия'
												)
										}}
									>
										Прямоугольные
									</li>
									<li
										onClick={() => {
											setUnderCategory('Фигурные'),
												setCategory(
													'Ритуальные изделия'
												)
										}}
									>
										Фигурные
									</li>
									<li
										onClick={() => {
											setUnderCategory('Эксклюзивные'),
												setCategory(
													'Ритуальные изделия'
												)
										}}
									>
										Эксклюзивные
									</li>
									<li
										onClick={() => {
											setUnderCategory('Цоколя'),
												setCategory(
													'Ритуальные изделия'
												)
										}}
									>
										Цоколя
									</li>
									<li
										onClick={() => {
											setUnderCategory('Плиты'),
												setCategory(
													'Ритуальные изделия'
												)
										}}
									>
										Плиты
									</li>
									<li
										onClick={() => {
											setUnderCategory('Гранит'),
												setCategory(
													'Ритуальные изделия'
												)
										}}
									>
										Гранит
									</li>
									<li
										onClick={() => {
											setUnderCategory('Мрамор'),
												setCategory(
													'Ритуальные изделия'
												)
										}}
									>
										Мрамор
									</li>
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
									<li
										onClick={() => {
											setUnderCategory('Для карьера'),
												setCategory('Станки')
										}}
									>
										Для карьера
									</li>
									<li
										onClick={() => {
											setUnderCategory(
												'Для производства'
											),
												setCategory('Станки')
										}}
									>
										Для производства
									</li>
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
									<li
										onClick={() => {
											setUnderCategory('Новая техника'),
												setCategory('Спец техника')
										}}
									>
										Новая техника
									</li>
									<li
										onClick={() => {
											setUnderCategory('Б/У техника'),
												setCategory('Спец техника')
										}}
									>
										Б/У техника
									</li>
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
									<li
										onClick={() => {
											setUnderCategory('Ищу работу'),
												setCategory('Работа')
										}}
									>
										Ищу работу
									</li>
									<li
										onClick={() => {
											setUnderCategory('Ищу сотрудника'),
												setCategory('Работа')
										}}
									>
										Ищу сотрудника
									</li>
									<li
										onClick={() => {
											setUnderCategory('Резюме'),
												setCategory('Работа')
										}}
									>
										Резюме
									</li>
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
									<li
										onClick={() => {
											setUnderCategory('Ремонт'),
												setCategory('Услуги')
										}}
									>
										Ремонт
									</li>
									<li
										onClick={() => {
											setUnderCategory('Резка камня'),
												setCategory('Услуги')
										}}
									>
										Резка камня
									</li>
									<li
										onClick={() => {
											setUnderCategory('Полировка'),
												setCategory('Услуги')
										}}
									>
										Полировка
									</li>
									<li
										onClick={() => {
											setUnderCategory(
												'Напайка сегментов'
											),
												setCategory('Услуги')
										}}
									>
										Напайка сегментов
									</li>
									<li
										onClick={() => {
											setUnderCategory('Перевозка'),
												setCategory('Услуги')
										}}
									>
										Перевозка
									</li>
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
