import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero/Hero";
import { PopularFilm } from "@/components/PopularFilm/PopularFilm";
import { WatchFilms } from "@/components/WatchFilms/WatchFilms";
import { Tidings } from "@/components/Tidings/Tidings";
import { Forum } from "@/components/Forum/Forum";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <PopularFilm />
      <WatchFilms />
      <Tidings />
      <Forum />
      <Footer />
    </div>
  );
}
