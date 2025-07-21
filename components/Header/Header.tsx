"use client";
import Image from "next/image";
import style from "./Header.module.css";
import { HeaderData } from "./HeaderData";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={clsx(style.header, {
        [style.headerScrolled]: scroll,
      })}
    >
      <div>
        <div
          className={clsx(
            style.header__logo,
            scroll && style.header__logo__active
          )}
        >
          {" "}
          <Image src="/logo.svg" width={250} height={120} alt="LOGO" />
        </div>{" "}
        <div
          className={clsx(style.header__logo__hidden, scroll && style.active)}
        >
          {" "}
          <Image src="/logo.svg" width={250} height={60} alt="LOGO" />
        </div>
      </div>
      <div className={style.header__link}>
        {HeaderData.map((item, index) => (
          <Link className={style.link} key={index} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className={style.header__icons}>
        <div className={style.header__search}>
          {" "}
          <Link href="/">
            <Image src="/loop.svg" width={32} height={32} alt="loop" />
          </Link>
        </div>
        <div className={style.header__profile}>
          {" "}
          <Link href="/">
            <Image src="/profile.svg" width={30} height={32} alt="profile" />
          </Link>
        </div>
      </div>
    </div>
  );
};
