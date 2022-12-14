import Link from "next/link";
import Head from "next/head";
import Layout from "../../component/layout";
import styles from "../../styles/cart.module.css";
import { Cartlist } from "../../component/CartList/cartlist";
import Styles from "../../styles/cartlist.module.css";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Tour } from "../../types/types";
import { useState } from "react";
import Router from "next/router";
import { Any } from "typeorm";

type Props = {
  tours: Array<Tour>;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  deleteHandler: Function;
  loginId: string;
};
export function CartItems({
  tours,
  amount,
  setAmount,
  deleteHandler,
  loginId,
}: Props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorDate, setErrorDate] = useState(false);

  useEffect(() => {
    judgeError();
  });

  const judgeError = async () => {
    // const res = await fetch(`/api/inCarts/${loginId}`);
    // const inCarts = await res.json();
    // let userId = inCarts[Number(loginId) - 1];

    if (typeof tours === "undefined") {
      return;
    }
    let tourContents = tours.length;
    // console.log(tourContents);

    const arrayDate = [];
    for (let i = 0; i < tourContents; i++) {
      arrayDate.push(tours[i].tourDate);
      // console.log(arrayDate);
    }
    const compareDates = {};
    for (let entry of arrayDate) {
      let count = compareDates[entry];

      if (count === undefined) {
        compareDates[entry] = 1;
      } else {
        compareDates[entry]++;
      }
      // console.log(compareDates)
    }

    for (let compareDate in compareDates) {
      let count = compareDates[compareDate];
      if (count >= 2) {
        setErrorDate(true);
      }
    }
  };

  const handleSubmit = async (e: any) => {
    // 無効な入力値で送信されないために初めにキャンセルする
    e.preventDefault();

    if (tours.length === 0) {
      setErrorMessage("*カートに商品を追加してください。*");
    } else if (!loginId) {
      Router.push("/tour/login") as any;
    } else {
      Router.push("/tour/pay") as any;
    }
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
            {tours.length ? (
              <>
                <p
                  className={styles.errorDate}
                  style={{ display: errorDate ? "block" : "none" }}
                >
                  *カートの中に同じ日付のツアーが存在しています*
                </p>
                <div className={Styles.cartcontents}>
                  {tours.map((tour: any) => {
                    return (
                      <Cartlist
                        key={tour.id}
                        tour={tour}
                        setAmount={setAmount}
                        deleteHandler={deleteHandler}
                      />
                    );
                  })}
                </div>
                <h2>合計：{Number(amount).toLocaleString()}円</h2>
                <p className={styles.error_message}>{errorMessage}</p>
                <div className={styles.buttonsubmit}>
                  <div>
                    <form onSubmit={handleSubmit}>
                      {!loginId ? (
                        <button className={styles.submit} type="submit">
                          お支払い情報の入力へ進む
                        </button>
                      ) : (
                        <button className={styles.submit} type="submit">
                          お支払い情報の入力へ進む
                        </button>
                      )}
                    </form>
                  </div>
                  <div>
                    <Link href="/tour">
                      <button className={styles.submit} type="submit">
                        他のツアーを追加する
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className={styles.bookingC_error}>
                  カートにツアーが追加されていません
                </p>
                <Link href="/tour">
                  <div className={styles.bookingC_btn}>
                    <button className={styles.bookingC_btn_search}>
                      ツアーを探す
                    </button>
                  </div>
                </Link>
              </>
            )}
          </div>
        </main>
      </Layout>
    </>
  );
}
