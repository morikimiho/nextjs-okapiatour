
import styles from "../../styles/booking_confirmation.module.css";
import Head from "next/head";
import Layout from "../../component/layout";
import useCookie from "../../hooks/useCookie";



export default function BookingConfirmation() {
    const cookie = useCookie();
    // クッキーにセットされている名前をログイン名として表示
    const loginName = cookie.loginName;
    return(
        <>
        <Head>
            <title>予約確認フォーム</title>
        </Head>
        <Layout>
        <main>
            <h1 className={styles.bookingC_title}> {loginName}さん、こんにちは！</h1>
            <h2 className={styles.bookingC_message}>ご予約内容</h2>
            <p className={styles.bookingC_text}>現在ご予約いただいている内容の確認が可能です。</p>
        </main>
        </Layout>
        </>
    );
}
