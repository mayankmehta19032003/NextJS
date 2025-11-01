import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css"
import MainHeaderBg from './main-header-bg'

export default function MainHeader() {
  return (
    <>
    <MainHeaderBg/>
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
      <Image src={logoImg} alt="A plate" priority/>
      Next Foodies
      </Link>

      <nav className={styles.nav}>
        <ul>
            <li>
                <Link href="/meals">Browse meals</Link>
            </li>
            <li>
                <Link href="/community">Community</Link>
            </li>
        </ul>
      </nav>

    </header>
    </>
  );
}
