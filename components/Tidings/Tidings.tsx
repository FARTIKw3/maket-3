import Link from "next/link";
import style from "./Tidings.module.css";
import Image from "next/image";

export const Tidings = () => {
  return (
    <div className={style.tidings}>
      <div className={style.tidings__info}>
        <h2>
          The CW заказал пилотные серии «Рыцарей Готэма» и спин-оффа о родителях
          Винчестеров
        </h2>
      </div>
      <div className={style.tidings__news}>
        <div className={style.tidings__news__title}>
          <div>
            <h2>Новости</h2>
          </div>
          <div className={style.tidings__news__link}>
            <Link href="/">Читать все</Link>
          </div>
        </div>
        <div className={style.tidings__news__item}>
          <div>
            <Image
              className={style.tidings__news__item__img}
              src="/horror.jpg"
              width={147}
              height={147}
              alt="horro"
            />
          </div>
          <div className={style.tidings__news__item__text}>
            <div className={style.tidings__news__link}>
              <Link href="/">Дисней выпустит первый хоррор</Link>
            </div>
            <p>
              Равным образом рамки и место обучения кадров обеспечивает широкому
              кругу (специалистов) участие в формировании дальнейших направлений
              развития...
            </p>
          </div>
        </div>
        <div className={style.tidings__news__item}>
          <div className={style.tidings__news__item__text}>
            <div className={style.tidings__news__link}>
              <Link href="/">Дисней выпустит первый хоррор</Link>
            </div>
            <p>
              Равным образом рамки и место обучения кадров обеспечивает широкому
              кругу (специалистов) участие в формировании дальнейших направлений
              развития...
            </p>
          </div>
        </div>
        <div className={style.tidings__news__item}>
          <div>
            <Image
              className={style.tidings__news__item__img}
              src="/horror.jpg"
              width={147}
              height={147}
              alt="horro"
            />
          </div>
          <div className={style.tidings__news__item__text}>
            <div className={style.tidings__news__link}>
              <Link href="/">Дисней выпустит первый хоррор</Link>
            </div>
            <p>
              Равным образом рамки и место обучения кадров обеспечивает широкому
              кругу (специалистов) участие в формировании дальнейших направлений
              развития...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
