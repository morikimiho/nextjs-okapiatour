import Head from "next/head";
import Image from "next/image";
import {Header} from "../../component/header";
import {Footer} from "../../component/footer";
import styles from "../../styles/login.module.css";

export default function Login () {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Table />
            </div>
            <button type="button" className={styles.regibutton}>
                    <a href="#">新規登録はこちら</a>
            </button>
            <Footer />
        </>
    );
}

function Table () {
    return (
        <>
            <h3 className={styles.title}>下記からログインしてください。</h3>
            <div className={styles.innerborder}>
                <div className={styles.table}>
                    <table>
                        <tbody>
                            <tr className={styles.tr}>
                                <th>メールアドレス</th>
                                <td><input type="text"/></td>
                            </tr>
                            <tr className={styles.tr}>
                                <th>パスワード</th>
                                <td><input type="text"/></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                <button type="button" className={styles.button}>
                    <a href="#">ログイン</a>
                </button>
            </div>
        </>
    )
}
