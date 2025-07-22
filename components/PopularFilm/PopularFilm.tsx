import Image from "next/image";
import style from "./PopularFilm.module.css";

export const PopularFilm = () => {
  return (
    <div className={style.container}>
      <div className={style.PopularFilm__title}>
        <h2>Самый популярный фильм на неделе</h2>
      </div>
      <div className={style.PopularFilm__card}>
        <div>
          <div>
            <Image
              className={style.PopularFilm__film}
              src="/film.jpg"
              width={700}
              height={350}
              alt="film"
            />
          </div>
          <div>
            <button className={style.PopularFilm__btn}>Посмотреть</button>
          </div>
        </div>
      </div>
    </div>
  );
};
