import styles from "../../styles/booking_confirmation.module.css";
import Head from "next/head";
import Layout from "../../component/layout";
import useCookie from "../../hooks/useCookie";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BookingConfirmation() {
  const cookie = useCookie();
  // クッキーにセットされている名前をログイン名として表示
  const loginName = cookie.loginName;
  const loginId=cookie.loginId

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (loginName.length === 0) {
      return;
    }
    fetch(`http://localhost:8000/orders?userId=${loginId}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const cartitem = data[0];
        if (cartitem) {
          setUserData(cartitem.tours);
        }
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
            {" "}
            {loginName}さん、こんにちは！
          </h1>
          <h2 className={styles.bookingC_message}>ご予約内容</h2>
          <p className={styles.bookingC_text}>
            現在ご予約いただいている内容の確認が可能です。
          </p>
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
