import Image from "next/image";
import style from "./Footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.blueBlock}></div>
        <div>
          <div className={style.header__logo}>
            {" "}
            <Image src="/logo.svg" width={250} height={120} alt="LOGO" />
          </div>{" "}
          <div className={style.header__logo__hidden}>
            {" "}
            <Image src="/logo.svg" width={250} height={60} alt="LOGO" />
          </div>
        </div>
        <div className={style.header__link}>
          <Link className={style.link} href="/">
            Фильмы
          </Link>{" "}
          <Link className={style.link} href="/">
            Треды
          </Link>{" "}
          <Link className={style.link} href="/">
            Новости
          </Link>
        </div>
      </div>
    </>
  );
};
