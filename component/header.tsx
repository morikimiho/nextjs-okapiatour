import styles from "../styles/header.module.css";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";
import useCookie from "../hooks/useCookie";

export function Header() {
  const router = useRouter();
  const cookie = useCookie();
  // console.log(cookie);

  // クッキーにセットされている名前をログイン名として表示
  const loginId = cookie.loginId;
  const loginName = cookie.loginName;

  // ログアウト(クッキー削除)
  function logOut() {
    document.cookie = "userOkapiaTour=;path=/;max-age=0";
    const url = location.href;
    console.log(url);
    if (url == `${process.env.NEXT_PUBLIC_BASE_URL}/tour`) {
      Router.reload();
    } else {
      Router.push("/tour/");
    }
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
          <div className={styles.game}>
            <Link href="/tour/search-okapi">
                  <div className={styles.game_size}>
                    <Image
                      src="/images/video.png"
                      alt="ゲーム"
                      layout="fill"
                    />
                  </div>
                  <div className={styles.icon_name}>Okapi Game</div>
                </Link>
          </div>
          <div className={styles.contact}>
            <Link href="/tour/contact">
                  <div className={styles.contact_size}>
                    <Image
                      src="/images/help-desk.png"
                      alt="お問合せ"
                      layout="fill"
                    />
                  </div>
                  <div className={styles.icon_name}>お問合せ</div>
                </Link>
          </div>
            <div className={styles.cart}>
             
              <Link href="/tour/cart">
                <div className={styles.cart_size}>
                  <Image
                    src="/images/shopping-cart.png"
                    alt="ショッピングカート"
                    layout="fill"
                  />
                </div>
                <div className={styles.icon_name}>カート</div>
              </Link>
            </div>

            {/* ログインしてなかったら */}
            {!loginName && (
              <div>
                <Link href="/tour/login">
                  <button className={styles.button_login}>ログイン</button>
                </Link>
              </div>
            )}

            {/* ログインしてたら */}
            {loginName.length > 0 && (
              <>
                <div className={styles.login_user}>
                  <Link href="/tour/booking_confirmation">
                    <div className={styles.cart_size}>
                      <Image src="/images/user.png" alt="ロゴ" layout="fill" />
                    </div>
                    <div className={styles.icon_name}>{loginName}さん</div>
                  </Link>
                </div>
                <div className={styles.login_user}>
                  <Link href="/tour/booking_confirmation">
                    <div className={styles.cart_size}>
                      <Image
                        src="/images/booking.png"
                        alt="ロゴ"
                        layout="fill"
                      />
                    </div>
                    <div className={styles.icon_name}>予約確認</div>
                  </Link>
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
              <Image src="/images/user.png" alt="ロゴ" layout="fill" />
            </div>
            <Link href="/tour/booking_confirmation">
              <div>{loginName}さん</div>
            </Link>

            <div className={styles.res_icon}>
              <Image src="/images/booking.png" alt="ロゴ" layout="fill" />
            </div>
            <Link href="/tour/booking_confirmation">
              <div>予約の確認はこちら</div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
