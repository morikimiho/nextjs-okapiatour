import styles from "../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className={styles.headerall}>
      <div className={styles.header}>
        <div className={styles.logo}>
            <Link href="/trip" className={styles.icon_flex}>
              <div className={styles.icon}>
                <Image
                  src="/images/logo.png"
                  alt="ロゴ"
                  width={40}
                  height={40}
                />
                <div className={styles.tourTitle}>
               Okapia Tour
                </div>
              </div>
            </Link>
        </div>
        <div className={styles.buttons}>
          <div className={styles.cart}>
            <Link href="/">
              <Image
                src="/images/shopping-cart.png"
                alt="ショッピングカート"
                width={25}
                height={25}
              />
            </Link>
          </div>
          <div>
          <Link href="http://localhost:3000/tour/login">
          <button className={styles.button}>ログイン</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
