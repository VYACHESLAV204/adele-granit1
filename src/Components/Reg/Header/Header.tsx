const Header = () => {
	return (
		<div>
			<img src='src\assets\logo.svg' alt='Логотип' />
			<div>
				<img src='src\assets\geoForHeader.svg' alt='' />
				<p>Ваш регион:</p>
			</div>
			<div>
				<button>
					<img src='' alt='' />
				</button>
				<h2>Все категории</h2>
			</div>
			<div>
				<input type='text' />
			</div>
			<div>
				<button>Разместить обьявление</button>
			</div>
			<div>
				<button>Вход</button> <p>и</p>
				<button>регистрация</button>
			</div>
		</div>
	)
}

export default Header
