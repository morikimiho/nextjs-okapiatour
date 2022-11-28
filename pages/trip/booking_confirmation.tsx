import { Header } from "../../component/header";
import { Footer } from "../../component/footer";
import styles from "../../styles/booking_confirmation.module.css";
import Head from "next/head";

export default function BookingConfirmation() {
    return(
        <>
        <Head>
            <title>予約確認フォーム</title>
        </Head>
        <Header />
        <main>
            <h1 className={styles.bookingC_title}> {}さん、こんにちは！</h1>
            <h2 className={styles.bookingC_message}>ご予約内容</h2>
            <p className={styles.bookingC_text}>現在ご予約いただいている内容の確認が可能です。</p>
        </main>
        <Footer />
        </>
    );
}
