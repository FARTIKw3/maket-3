import style from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={style.hero__container}>
      <div className={style.hero}>
        <div className={style.hero__title}>
          <h1>Фильмы, сериалы, мультфильмы в одном месте!</h1>
        </div>
        <div>
          <p className={style.hero__paragraph}>
            Всегда хотели узнать где можно дешевле посмотреть то или иное
            произведение исскуства? Просто обсудить какой-то либо кинофраншизу?
            А может просто посмотреть последние новости в сфере кино?Тогда,
            данный сайт был сделан для вас!
          </p>
        </div>
        <div>
          <button className={style.hero__btn}>
            Посмотреть каталог фильмов
          </button>
        </div>
      </div>
    </div>
  );
};
