import styles from "../../styles/pay.module.css";
import useCookie from "../../hooks/useCookie";
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../../component/layout";
import Head from "next/head";
import Image from "next/image";
import { Tour } from "../../types/types";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Pay() {
  const cookie = useCookie();
  const loginId = cookie.loginId;
  //文字列になっていた

  //お支払い方法未選択の場合
  const router = useRouter()
  
  const [checkPayment, setCheckPayment] = useState<boolean>(false);
  const checkPay = () => {
    setCheckPayment(!checkPayment);
  };


  const [cart, setCart] = useState();
  const [amount, setAmount] = useState(0);
  const fetcher = (resource: any, init: any) =>
    fetch(resource, init).then((res) => res.json());
  const { data, error } = useSWR(`/api/inCarts?userId=${loginId}`, fetcher);
  useEffect(() => {
    if (loginId.length === 0) {
      return;
    }
    //カート
    const cartcontent = data[0];
    if (cartcontent) {
      setCart(cartcontent);

      setAmount(
        cartcontent.tours.reduce(
          (prev: number, current: { price: number; numberOfPeople: number }) =>
            current.price * current.numberOfPeople + prev,
          0
        )
      );
    }
  }, [data]);

  // エラーになった場合は一覧は表示できないのでここで終わり
  if (error) return <div>failed to load</div>;
  // データ取得が完了していないときはローディング画面
  if (!data) return <div>loading...</div>;

  console.log(loginId);
  //   useEffect(() => {  }, [loginId]);
  const onClick = async () => {
    if (loginId.length === 0) {
      return;
    }

    //お支払い方法が未選択の場合
    if (checkPayment === false){
      alert("お支払い方法を選択してください。") 
      return;
    }

    //cartの中身を取得し、ordersへ格納する。
    await fetch(`/api/inCarts?userId=${loginId}`)
      .then((response) => response.json())
      .then((data) => {
        const cart = data[0];
        // console.log(deta);

        let randomstring = require("randomstring");
        fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tours: cart.tours,
            userId: cart.userId,
            rsNumber:
              "OkapiTour" +
              randomstring.generate({
                length: 12,
                charset: "alphabetic123456890",
              }),
          }),
        });
      });
    if (cart) {
      fetch(`/api/inCarts/${cart.id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tours: [] }),
      });
    }
    router.push("/tour/booking_done");
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
              cart.tours.map((tour: Tour) => {
                return (
                  <>
                    <h3>{tour.tourName}</h3>
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
                          <li>日程：{tour.tourDate}</li>
                          <li>人数：{tour.numberOfPeople}人</li>
                          <li>小計：{tour.total.toLocaleString()}円</li>
                        </ul>
                      </div>
                    </div>
                  </>
                );
              })}
            <div>
              <h2>合計:{amount.toLocaleString()}円</h2>
            </div>
          </div>
          <h3 className={styles.title}>
            下記からお支払いの方法を選択してください。
          </h3>
          <div className={styles.input}>
            <form>
              <div className={styles.radio}>
                <input type="radio" id="01" name="pay" value="credit"  onChange={() => checkPay()}/>
                クレジットカード
              </div>
              <br />
              <div className={styles.radio}>
                <input type="radio" id="02" name="pay" value="bank" onChange={() => checkPay()}/>
                銀行振込
              </div>
              <br />
              <div className={styles.radio}>
                <input type="radio" id="03" name="pay" value="convenience" onChange={() => checkPay()}/>
                コンビニ支払い
              </div>
                <button
                  type="button"
                  className={styles.button}
                  onClick={onClick}
                >
                  決済する
                </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
