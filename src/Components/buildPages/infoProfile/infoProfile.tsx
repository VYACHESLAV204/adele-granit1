
import s from './infoProfile.module.css'

const infoProfile = () => {
  return (
    <div className={s.sectionContainer}>
        <h1 className={s.mainTitle}>Настройки</h1>
        <div className={s.contentContainer}>
            <div className={s.rightWrapper}>
               <p className={s.textContent}>info@info.ru</p> 
               <p className={s.textContent}>Телефоны</p>
               <div className={s.phoneConteiner}>
                    <p className={s.textContent}>+7 123 456 78 90</p>
                    <p className={s.descText}>(можно добавить не более 2-х номеров)</p>
                </div> 
                <button className={s.btn}>Добавить номер</button>
            </div>
            <div className={s.leftWrapper}>
                <h2 className={s.secondTitle}>Контактная информация</h2>
                <p className={s.textContent}>Город</p>
                <input className={s.input} type="text" />
                <button className={s.btn}>Сохранить</button>
            </div>
        </div>
    </div>
  )
}

export default infoProfile