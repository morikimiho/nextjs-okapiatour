import styles from "../styles/footer.module.css";
import { ScrTop } from "./tps";
import Image from "next/image";
import { text } from "stream/consumers";

export function Footer() {
  return (
    <>
    <div className={styles.bigfotter}>
      <div className={styles.page_link}>
        <div className={styles.trip} >
          <h5>国内旅行</h5>
          <ul className={styles.list}>
          <li>-北海道・東北</li>
          <li>-中部</li>
          <li>-関東</li>
          <li>-中国・四国</li>
          <li>-近畿</li>
          <li>-九州・沖縄</li>
          </ul>
        </div>
        <div className={styles.trip} >
          <h5>海外旅行</h5>
          <ul className={styles.list}>
          <li>-北米</li>
          <li>-ヨーロッパ</li>
          <li>-アジア</li>
          <li>-オセアニア</li>
          <li>-南米</li>
          <li>-アフリカ</li>
          </ul>
        </div>
        <div className={styles.trip} >
          <h5>その他</h5>
          <ul className={styles.list}>
          <li>-HOME</li>
          <li>-マイページ</li>
          <li>-カート</li>
          <li>-お問合せ</li>
          <li>-Okapi Game</li>
          </ul>
        </div>
      </div>
      <div><Image src="/images/horse.png" alt={"うま"} width={250} height={210}></Image></div>
      <div><Image src="/images/horse.png" alt={"うま"} width={220} height={180}></Image></div>
      <div><Image src="/images/horse.png" alt={"うま"} width={160} height={120}></Image></div>
      <div><Image src="/images/horse.png" alt={"うま"} width={120} height={90}></Image></div>
      <div><Image src="/images/horse.png" alt={"うま"} width={80} height={50}></Image></div>
        <div>
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
        </div>
    </div>
      <ScrTop />
    </>
  );
}
