import Head from "next/head";
import Image from "next/image";

export default function Home () { 
    return (
        <>
            <Head>
                <title>trip</title>
            </Head>
            <div className='topimage'>
                <Image src='/images/topimage.jpg' alt='絶景の画像' width={1500} height={750}/>
            </div>
      </>
    );
  }
  