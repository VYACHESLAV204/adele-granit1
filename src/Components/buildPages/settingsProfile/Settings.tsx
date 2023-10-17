import s from './Settings.module.css'

function Settings() {
  return (
    <div className={s.settingsSection}>
      <h1 className={s.mainTitle} >Управление профилем</h1>
      <div className={s.selectorBox}>
      <div className={`${s.slider} ${s.sliderOptions}`}>
        <div className={s.selectContainer}>
          <h2 className={s.sliderTextItem}>Основные данные</h2>
          <div className={s.lineActive}></div>
        </div>
        <div className={s.selectContainer}>
          <h3 className={`${s.sliderTextItem} ${s.sliderMargin}`}>Вид профиля</h3>
          <div className={s.lineUnActive}></div>
        </div>
      </div>
      </div>
      <div className={s.sectionBox}>
        <div className={`${s.firstLineContainer} ${s.lineContainer}`}>
          <p className={s.lineInfo}>Номер профиля</p>
          <p className={s.lineInfo}>Имя в профиле</p>
        </div>
        <div className={`${s.firstLineContainer} ${s.lineContainer}`}>
          <p className={s.lineInfo}>33 123 123 123</p>
          <p className={s.lineInfo}>EDGAR</p>
        </div>
        <div className={`${s.firstLineContainer} ${s.lineContainer}`}>
          <link rel="stylesheet" href="" /><p className={s.lineLink}>Посмотреть</p>
          <link rel="stylesheet" href="" /><p className={s.lineLink}>Изменить профиль</p>
        </div>
      </div>
    </div>
  )
}

export default Settings