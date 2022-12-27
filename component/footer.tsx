import styles from "../styles/footer.module.css";
import { ScrTop } from "./tps";
import Image from "next/image";
import { text } from "stream/consumers";

export function Footer() {
  return (
    <>
      <div className={styles.socials}>
        <p className={styles.face}>
          <Image
            src="/images/social/social01.png"
            alt="facebookロゴ"
            width={25}
            height={25}
          />
        </p>
        <p className={styles.tw}>
          <Image
            src="/images/social/social02.png"
            alt="twitterロゴ"
            width={25}
            height={25}
          />
        </p>
        <p className={styles.ins}>
          <Image
            src="/images/social/social03.png"
            alt="instgramロゴ"
            width={25}
            height={25}
          />
        </p>
      </div>
      <div className={styles.footer}>
        <p className={styles.copy}>&copy; Okapia Tour</p>
      </div>
      <ScrTop />
    </>
  );
}
