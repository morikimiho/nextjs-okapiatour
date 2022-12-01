import styles from "../../styles/pay.module.css";
import useCookie from "../../hooks/useCookie";
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../../component/layout";
import Head from "next/head";
import Image from "next/image";

export default function Pay() {
  const cookie = useCookie();
  const loginId = cookie.loginId;
  //文字列になっていた
  const [cart, setCart] = useState();

  useEffect(() => {
    if (loginId.length === 0) {
      return;
    }
    fetch(`http://localhost:8000/inCarts?userId=${loginId}`)
      .then((response) => response.json())
      .then((deta) => {
        //カート
        setCart(deta[0]);
        console.log(deta);
      });
    //取れないことは想定しない
    //next dev動いている時 catch
    //mock-apiが起動していない時　res
  }, [loginId]);

  //   useEffect(() => {  }, [loginId]);
  const onClick = () => {
    if (loginId.length === 0) {
      return;
    }
    fetch(`http://localhost:8000/inCarts?userId=${loginId}`)
      .then((response) => response.json())
      .then((deta) => {
        // console.log(deta);
        fetch("http://localhost:8000/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(deta),
        });
      });
  };
  return (
    <>
      <Head>
        <title>お支払いページ</title>
      </Head>
      <Layout>
        <div className={styles.width}>
          <h3 className={styles.title}>お支払いの内容を確認してください。</h3>
          <div className={styles.total}>
            {cart &&
              cart.tours.map((tour) => {
                return (
                  <>
                    <h3>購入ツアー：{tour.tourName};</h3>
                    <div className={styles.flex}>
                      <div>
                        <Image
                          src={tour.img1}
                          alt="画像"
                          width={150}
                          height={100}
                        ></Image>
                      </div>
                      <div>
                        <ul className={styles.list}>
                          <li>日程:{tour.tourDate}</li>
                          <li>人数：{tour.numberOfPeople}</li>
                          <li>小計:{tour.total}円</li>
                        </ul>
                      </div>
                    </div>
                    
                  </>
                );
              })}
              <div><h2>合計:</h2></div>
          </div>
          <h3 className={styles.title}>
            下記からお支払いの方法を選択してください。
          </h3>
          <div className={styles.input}>
            <form>
              <div className={styles.radio}>
                <input type="radio" id="01" name="pay" />
                クレジットカード
              </div>
              <br />
              <div className={styles.radio}>
                <input type="radio" id="02" name="pay" />
                銀行振込
              </div>
              <br />
              <div className={styles.radio}>
                <input type="radio" id="03" name="pay" />
                コンビニ支払い
              </div>
              <Link href="/tour/booking_done">
                <button
                  type="button"
                  className={styles.button}
                  onClick={onClick}
                >
                  決済する
                </button>
              </Link>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

// export function InputRange({onSubmit}) {
//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <div className={styles.radio}>
//           <input type="radio" id="01" name="pay" />
//           クレジットカード
//         </div>
//         <br />
//         <div className={styles.radio}>
//           <input type="radio" id="02" name="pay" />
//           銀行振込
//         </div>
//         <br />
//         <div className={styles.radio}>
//           <input type="radio" id="03" name="pay" />
//           コンビニ支払い
//         </div>
//         <Link href="/tour/booking_done">
//             <button type="button" className={styles.button}>
//             決済する
//                   </button>
//         </Link>
//       </form>

//     </>
//   );
// }
