import Head from "next/head";
import styles from "../styles/booking_done.module.css";
import Link from "next/link";
import { Header } from "../component/header";
import { Footer } from "../component/footer";
  
export default function BookingDone() {
  return (
    <>
      <Head>
        <title>予約完了フォーム</title>
      </Head>
      <Header />
      <main>
        <h1 className={styles.booking_title}>予約完了</h1>
        <p className={styles.booking_thanks}>
          お申し込みいただき、ありがとうございます！
        </p>

        <div className={styles.booking_number}>
          <p>ご予約を承りました。</p>
          <p>ご予約番号</p>
          <p>お問合せに必要な番号です。大切に保管してください。</p>
        </div>

        <p className={styles.booking_message}>
          ご予約確認ページよりお申し込み内容お申し込み内容をご確認いただけます。
        </p>
        
        <Link href='http://localhost:3000/booking_confirmation'>
        <div className={styles.booking_button}>
        <button className={styles.booking_btn} type="submit">予約確認へ</button>
        </div>
        </Link>

        <div className={styles.booking_note}>
          <p>
            銀行支払い/コンビニ支払いの方は、メールの『お支払い方法はこちら』をご確認ください。
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
