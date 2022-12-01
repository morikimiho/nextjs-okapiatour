import styles from "../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import useCookie from "../hooks/useCookie";

export function Header() {
  const router = useRouter();
  const cookie = useCookie();
  // console.log(cookie);

  // クッキーにセットされている名前をログイン名として表示
  const loginId = cookie.loginId;
  const loginName = cookie.loginName;

  // ログアウト(クッキー削除)　　挙動少しおかしい要改善
  function logOut() {
    if (!"/tour") {
      document.cookie = "userOkapiaTour=;max-age=0";
      router.push("/tour");
    } else {
      router.reload();
    }
    document.cookie = "userOkapiaTour=;max-age=0";
  }

  return (
    <div className={styles.header_all}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/tour" className={styles.icon_flex}>
            <div className={styles.icon}>
              <Image src="/images/logo.png" alt="ロゴ" width={40} height={40} />
              <div className={styles.tourTitle}>Okapia Tour</div>
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

          {/* ログインしてなかったら */}
          {!loginName && (
            <div>
              <Link href="/tour/login">
                <button className={styles.button}>ログイン</button>
              </Link>
            </div>
          )}

          {/* ログインしてたら */}
          {loginName.length > 0 && (
            <>
              <div>
                <div>{loginId}</div>
                <div>{loginName}さん</div>
              </div>
              <button className={styles.button} onClick={logOut}>
                ログアウト
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
