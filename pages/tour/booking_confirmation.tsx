import styles from "../../styles/booking_confirmation.module.css";
import Head from "next/head";
import Layout from "../../component/layout";
import useCookie from "../../hooks/useCookie";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Tour } from "../../types/types";


export default function BookingConfirmation() {
  const cookie = useCookie();
  // クッキーにセットされている名前をログイン名として表示
  const loginName = cookie.loginName;
  const loginId = cookie.loginId;

  // const [userData, setUserData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (loginName.length === 0) {
      return;
    }
    fetch(`http://localhost:8000/orders?userId=${loginId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
  
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [loginName]);

  return (  
    <>
      <Head>
        <title>予約確認フォーム</title>
      </Head>
      <Layout>
        <main>
          <h1 className={styles.bookingC_title}>
            {loginName}さん、こんにちは！
          </h1>
          <h2 className={styles.bookingC_message}>ご予約内容</h2>
          {data.length ? (<p>現在ご予約いただいているツアーの確認が可能です。</p>):(<p>お客様が予約されているツアーはありません。</p>)}
        

          {data.map((d) => {
            return(
            <div className={styles.bookings}>
              <h3>予約番号:{d.rsNumber}</h3>
              {d.tours.map((tour:Tour)=>{
                return (
                  <div>
                    <h4>{tour.tourName}</h4>
                    <div className={styles.flex} >
                      <Image src={tour.img1} width={150} height={100} alt="画像" />
                      <div>
                        <ul className={styles.list}>
                          <li>日程：{tour.tourDate}</li>
                          <li>開始時刻:{tour.startTime}</li>
                          <li>人数:{tour.numberOfPeple}</li>
                          <li>合計価格{tour.total.toLocaleString()}</li>
                        </ul>
                        
                      </div>
                    </div>
                  </div>

                )
              })}
            </div>
            )
          })}

      
        </main>
      </Layout>
    </>
  );
}
