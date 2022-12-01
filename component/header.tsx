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
    <>
      <div className={styles.header}>
        <div className={styles.header_items}>
          <div className={styles.header_logo}>
            <Link href="/tour" className={styles.icon_flex}>
              <div className={styles.header_logo_items}>
                <div className={styles.icon}>
                  <Image src="/images/logo.png" alt="ロゴ" layout="fill" />
                </div>
                <div className={styles.tourTitle}>Okapia Tour</div>
              </div>
            </Link>
          </div>
          <div className={styles.buttons}>
            <div className={styles.cart}>
              <Link href="/tour/cart">
                <div className={styles.cart_size}>
                  <Image
                    src="/images/shopping-cart.png"
                    alt="ショッピングカート"
                    layout="fill"
                  />
                </div>
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
                <div className={styles.login_user}>
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

      {loginName.length > 0 && (
        <div className={styles.res_login_user}>
          <div className={styles.res_flex}>
            <div className={styles.res_icon}>
              <Image src="/images/res_user_pin.png" alt="ロゴ" layout="fill" />
            </div>
            <Link href="/tour/booking_confirmation">
              <div>ようこそ！{loginName}さん</div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
