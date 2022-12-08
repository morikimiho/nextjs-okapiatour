import useSWR from "swr";
import { useEffect, useReducer } from "react";
import { Tour } from "../../types/types";
import { useRouter } from "next/router";
import { toUSVString } from "util";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../component/layout";
import styles from "../../styles/cart.module.css";

import Styles from "../../styles/cartlist.module.css";
import Image from "next/image";

import { useState } from "react";
import useCookie from "../../hooks/useCookie";

const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json());

export default function Cart() {
   
  const cookie = useCookie();
  const loginId = cookie.loginId;
  const { data, error } = useSWR(`/api/inCarts?userId=${loginId}`, fetcher);
  //合計を格納
  const [amount, setAmount] = useState(0);

 
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    if (!data) return;
    const cart = data[0];
    setTours(cart.tours);
    console.log(tours);

    setAmount(
      cart.tours.reduce(
        (prev: number, current: { price: number; numberOfPeople: number }) =>
          current.price * current.numberOfPeople + prev,
        0
      )
    );
  }, [data]);

    //人数を格納
   const[num,setNum]=useState();

  // エラーになった場合は一覧は表示できないのでここで終わり
  if (error) return <div>failed to load</div>;
  // データ取得が完了していないときはローディング画面
  if (!data) return <div>loading...</div>;


  //   const deleteHandler = (val: number) => {
  //     const newTours = tours.filter((tour) => tour.id != val);

  //     // console.log("yo",logid);
  //     fetch(`http://localhost:8000/inCarts/${cart.id}`, {
  //       method: "PATCH",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ tours: newTours }),
  //     });
  //     setTours(newTours);
  //   };

  //   const [num, setNum] = useState(tour.numberOfPeople);

    const HandleNumChange = (e: { target: { value: any } }) => {
      const newNum = e.target.value;
      setNum(newNum);
      setAmount((prev: number) => prev - tour.price * num + tour.price * newNum);
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
                  <div className={Styles.each_tour} key={tour.id}>
                    <h3 className={Styles.padding}>{tour.tourName}</h3>
                    <div className={Styles.flex}>
                      <Image
                        src={tour.img1}
                        width={180}
                        height={130}
                        alt="ツアー画像"
                      />
                      <div className={Styles.tourinfo}>
                        <ul className={Styles.list}>
                          <li>日程：{tour.tourDate}</li>
                          <li>開始時間：{tour.startTime}時</li>
                          <li>概要：{tour.description}</li>
                          <li>価格：{Number(tour.price).toLocaleString()}円</li>
                        </ul>
                      </div>
                      <div className={Styles.delete_count_total}>
                        <button
                          className={Styles.delete_button}
                          type="submit"
                          onClick={(e) => deleteHandler(tour.id)}
                        >
                          削除
                        </button>
                        <div className={Styles.cartlist_items}>
                          <div>
                            <label htmlFor="">人数</label>
                            <select className={Styles.cart_detail_count}>
                              <option value="">-</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>
                          </div>
                          <div className={Styles.total_value}>
                            {/* 小計：{Number(tour.price * num).toLocaleString()}円 */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <h2>合計：{Number(amount).toLocaleString()}円</h2>
            <div className={styles.buttonsubmit}>
              <div>
                {!loginId ? (
                  <Link href="http://localhost:3000/tour/login">
                    <button className={styles.submit} type="submit">
                      お支払い情報の入力へ進む
                    </button>
                  </Link>
                ) : (
                  <Link href="http://localhost:3000/tour/pay">
                    <button className={styles.submit} type="submit">
                      お支払い情報の入力へ進む
                    </button>
                  </Link>
                )}
              </div>
              <div>
                <Link href="http://localhost:3000/tour/search-page">
                  <button className={styles.submit} type="submit">
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
