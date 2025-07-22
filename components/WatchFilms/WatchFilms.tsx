import Image from "next/image";
import style from "./WatchFilms.module.css";
import { WatchFilmsData } from "./WatchFilmsData";

export const WatchFilms = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>Вы хотели посмотреть</h2>
      </div>
      <div className={style.films}>
        {WatchFilmsData.map((item, index) => (
          <div className={style.films__card} key={index}>
            <div>
              <Image
                src={item.film}
                width={350}
                height={495}
                alt="films"
                className={style.film__img}
              />
            </div>
            <div>
              <button className={style.films__btn}>Посмотреть</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
