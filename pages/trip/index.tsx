import Head from "next/head";
import Image from "next/image";
import styles from "..styles/toppage.module.css"

export default function Home () { 
    return (
        <>
            <Head>
                <title>trip</title>
            </Head>
            <div className={styles.top}>
                {/* <Image src='/images/topimage.jpg' alt='絶景の画像' width={1500} height={750}/> */}
            </div>
      </>
    );
  }
  