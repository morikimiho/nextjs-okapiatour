import { Head } from "next/document";
import Link from "next/link";
import { Cartlist } from "../CartList/cartlist";
import Layout from "../layout";
import styles from "../../styles/cart.module.css";


export function CartItems({tours, amount, setAmount, deleteHandler}) {
    return (
      <>
        <Head>
          <title>買い物リスト</title>
        </Head>
        <Layout>
          <main>
            <div className={styles.cart_width}>
              <h1>ツアーカート</h1>
              <div className={styles.cartcontents}>
                {tours.tours.map((tour: any) => {
                  return (
                    <Cartlist
                      tour={tour}
                      setAmount={setAmount}
                      deleteHandler={deleteHandler}
                    />
                  );
                })}
              </div>
              <h2>合計：{Number(amount).toLocaleString()}円</h2>
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
  