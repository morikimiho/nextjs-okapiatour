import Link from "next/link";
import Head from "next/head";
import Layout from "../../component/layout";
import useSWR from "swr";
import styles from "../../styles/cart.module.css";
import { Cartlist } from "../../component/CartList/cartlist";
import { useEffect, useState } from "react";

const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json());

export default function Cart() {
  const { data, error } = useSWR("/api/inCart", fetcher);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (!data) return;
    setAmount(
      data.reduce(
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

  return (
    <>
      <Head>
        <title>買い物リスト</title>
      </Head>
      <Layout>
        <main>
          {data.map((cart: any) => {
            return <Cartlist cart={cart} setAmount={setAmount} />;
          })}
          <p>合計：{amount}円</p>
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
        </main>
      </Layout>
    </>
  );
}
