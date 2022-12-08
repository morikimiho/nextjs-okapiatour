import Head from "next/head";
import styles from "../../styles/booking_done.module.css";
import Link from "next/link";
import useCookie from "../../hooks/useCookie";
import Layout from "../../component/layout";
import { useEffect, useState } from "react";

export default function BookingDone() {
  const cookie = useCookie();
  const loginId = cookie.loginId;
  const [rsNumber, setRsNumber] = useState("");

  useEffect(() => {
    if (loginId.length === 0) {
      return;
    }
    fetch(`http://localhost:8000/orders?userId=${loginId}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const cartitem = data[0];
        if (cartitem) {
          setRsNumber(cartitem);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [loginId]);
console.log(rsNumber)
  return (
    <>
      <Head>
        <title>予約完了フォーム</title>
      </Head>
      <Layout>
        <main>
          <div className={styles.booking_title}>
            <h2>予約が完了しました</h2>
          </div>
          <p className={styles.booking_thanks}>
            お申し込みいただき、ありがとうございます！
          </p>

          <div className={styles.booking_number}>
            <p>ご予約を承りました。</p>
            <p>ご予約番号</p>

            <p className={styles.booking_RsNumber}>{rsNumber.rsNumber}</p>
            <p className={styles.booking_message}>
              お問合せに必要な番号です。大切に保管してください。
            </p>
          </div>

          <p className={styles.booking_message}>
            ご予約確認ページよりお申し込み内容お申し込み内容をご確認いただけます。
          </p>

          <div className={styles.booking_button}>
            <Link href="http://localhost:3000/tour/booking_confirmation">
              <button className={styles.booking_btn} type="submit">
                予約確認へ
              </button>{" "}
            </Link>
          </div>

          <div className={styles.booking_note}>
            <p>
              銀行支払い/コンビニ支払いの方は、メールの『お支払い方法はこちら』をご確認ください。
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
}
