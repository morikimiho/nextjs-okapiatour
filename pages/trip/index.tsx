import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/toppage.module.css";

export default function Home () { 
    return (
        <>
            <Head>
                <title>trip</title>
            </Head>
            <div className={styles.container}>
                <Image className={styles.top} src="/images/topimage.jpg" alt='絶景の画像' width={1500} height={700}/>
                <button type="button" className={styles.search}>
                    <a href="#">検索する →</a>
                </button>
            </div>
      </>
    );
  }
  