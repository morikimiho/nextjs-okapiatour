import Link from "next/link";
import Head from "next/head";
import Layout from "../../component/layout";
import useSWR from "swr";
import styles from "../../styles/cart.module.css";
import { Cartlist } from "../../component/CartList/cartlist";
import { useEffect, useState } from "react";
import useCookie from "../../hooks/useCookie";
import Styles from "../../styles/cartlist.module.css";

const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json());

export default function Cart() {
  const cookie = useCookie();
  const loginId = cookie.loginId;
  const { data, error } = useSWR(
    `http://localhost:8000/inCarts?userId=${loginId}`,
    fetcher
  );
  const [amount, setAmount] = useState(0);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    if (!data) return;
    const cart = data[0];
    setTours(cart.tours);
    // console.log(tours);

    setAmount(
      cart.tours.reduce(
        (prev: number, current: { price: number; numberOfPeople: number }) =>
          current.price * current.numberOfPeople + prev,
        0
      )
    );
  }, [data]);
    // エラーになった場合は一覧は表示できないのでここで終わり
    if (error) return <div>failed to load</div>;
    // データ取得が完了していないときはローディング画面
    if (!data) return <div>loading...</div>;
    const cart=data[0];

  const deleteHandler = (val: number) => {
    const newTours = tours.filter((tour) => tour.id != val);
      
      // console.log("yo",logid);
      fetch(`http://localhost:8000/inCarts/${cart.id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tours: newTours }),
      });
    setTours(newTours);
  };

  return (
    <>
      <Head>
        <title>買い物リスト</title>
      </Head>
      <Layout>
        <main>
          <div className={Styles.cart_width}>
            <h1>ツアーカート</h1>
            <div className={Styles.cartcontents}>
              {tours.map((tour: any) => {
                return (
                  <Cartlist
                    tour={tour}
                    setAmount={setAmount}
                    deleteHandler={deleteHandler}
                  />
                );
              })}
            </div>
            <h2>合計：{amount}円</h2>
            <div className={styles.buttonsubmit}>
              <div>
                <Link href="http://localhost:3000/tour/pay">
                  <button className={styles.paysubmit} type="submit">
                    お支払い情報の入力へ進む
                  </button>
                </Link>
              </div>
              <div>
                <Link href="http://localhost:3000/tour/search-page">
                  <button className={styles.searchsubmit} type="submit">
                    他のツアーを追加する
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
