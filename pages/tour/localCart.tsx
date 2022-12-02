import Image from "next/image";
import styles from "../../styles/shoppingcart.module.css";
import Layout from "../../component/layout";

export default function ShoppingCart() {
  return (
    <>
        <Layout>
        <main>
            <div className={styles.tour}>
            <div>
                <div>日付</div>
                <Image
                src="/cookie"
                width={100}
                height={150}
                alt="cookieから持ってきた写真"
                />
            </div>
            <div className={styles.tourdetail}>
                <h2>ツアー名(Cookieから持ってくる）</h2>
                <p>ツアー詳細(Cookieから持ってくる)</p>
                <div className={styles.button}>
                <button>-</button>
                <p>&nbsp;1&nbsp;</p>
                <button>+</button>
                </div>
                <button>削除</button>
                <p>金額:cookieから持ってくる</p>
            </div>
            </div>

            <div>合計金額 ✖️✖️✖️円</div>
        </main>
        </Layout>
    </>
  );
}
