import Link from "next/link";
import style from "./Forum.module.css";
import Image from "next/image";

export const Forum = () => {
  return (
    <div className={style.forum}>
      <div className={style.forum__header}>
        <div>
          <h2>Форум</h2>
        </div>
        <div>
          <Link className={style.forum__link} href="/">
            Все треды
          </Link>
        </div>
      </div>
      <div className={style.forum__cards}>
        <div className={style.forum__card}>
          <div>
            <Image
              src="/bubble.jpg"
              width={365}
              height={300}
              style={{ borderRadius: "18px" }}
              alt="logo"
            />
          </div>
          <div className={style.forum__card__content}>
            <div>
              <h2>КиноВселенная “Майора Грома</h2>
            </div>
            <div>
              <p>
                В данном треде, Вы сможете узнать намного больше про
                киновселенную от Bubble про великого майора полиции - Игоря
                Грома
              </p>
            </div>
            <div>
              <button className={style.forum__card__btn}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className={style.forum__card}>
          <div className={style.forum__card__content}>
            <div>
              <h2>КиноВселенная “Майора Грома</h2>
            </div>
            <div>
              <p>
                В данном треде, Вы сможете узнать намного больше про
                киновселенную от Bubble про великого майора полиции - Игоря
                Грома
              </p>
            </div>
            <div>
              <button className={style.forum__card__btn}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className={style.forum__card}>
          <div className={style.forum__card__content}>
            <div>
              <h2>КиноВселенная “Майора Грома</h2>
            </div>
            <div>
              <p>
                В данном треде, Вы сможете узнать намного больше про
                киновселенную от Bubble про великого майора полиции - Игоря
                Грома
              </p>
            </div>
            <div>
              <button className={style.forum__card__btn}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className={style.forum__card}>
          <div>
            <Image
              src="/bubble.jpg"
              width={365}
              height={300}
              style={{ borderRadius: "18px" }}
              alt="logo"
            />
          </div>
          <div className={style.forum__card__content}>
            <div>
              <h2>КиноВселенная “Майора Грома</h2>
            </div>
            <div>
              <p>
                В данном треде, Вы сможете узнать намного больше про
                киновселенную от Bubble про великого майора полиции - Игоря
                Грома
              </p>
            </div>
            <div>
              <button className={style.forum__card__btn}>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
