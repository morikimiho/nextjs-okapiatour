import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/toppage.module.css";
import {Header} from "../../component/header";
import {Footer} from "../../component/footer";

export default function Home () { 
    return (
        <>
            <Head>
                <title>trip</title>
            </Head>
            <Header />
            <div className={styles.container}>
                <Image className={styles.top} src="/images/富士山.jpg" alt='富士山の画像'width={1500} height={600} objectFit="contain"/>
                <button type="button" className={styles.search}>
                    <a href="#">&nbsp;&nbsp;search&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Image src="/images/虫眼鏡.png" alt="検索" width={16} height={16} /></a>
                </button>
            </div>
            <Footer />
      </>
    );
  }
  