import styles from "../../styles/booking_confirmation.module.css";
import Head from "next/head";
import Layout from "../../component/layout";
import useCookie from "../../hooks/useCookie";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
          {data.length ? (
            <p className={styles.bookingC_ok}>現在ご予約いただいているツアーの確認が可能です。</p>
          ) : (
            <p className={styles.bookingC_error}>
              お客様が予約されているツアーはありません。
            </p>
          )}
          {data.length ? (
            <p className={styles.dpn}></p>
          ) : (
            <Link href="/tour/search-page">
              <div className={styles.bookingC_btn}>
                <button className={styles.bookingC_btn_search}>
                  ツアーを探す
                </button>
              </div>
            </Link>
          )}

          {data.map((d) => {
            return (
              <div className={styles.bookings}>
                <h4 className={styles.booking_id}>予約番号: {d.rsNumber}</h4>
                {d.tours.map((tour) => {
                  return (
                    <>
                      <div className={styles.booking_flex}>
                        <div className={styles.booking_image}>
                          <Image src={tour.img1} layout="fill" />
                        </div>
                        <div className={styles.list}>
                          <div className={styles.booking_items}>
                            {tour.tourName}
                          </div>
                          <div>日程：{tour.tourDate}</div>
                          <div>開始時刻:{tour.startTime}</div>
                          <div>人数:{tour.numberOfPeple}</div>
                          <div>合計価格{tour.total.toLocaleString()}</div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            );
          })}
        </main>
      </Layout>
    </>
  );
}
