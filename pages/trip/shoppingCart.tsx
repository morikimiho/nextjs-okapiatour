import { Footer } from "../../component/footer";
import { Header } from "../../component/header";
import Image from "next/image";

export default function ShoppingCart() {
  return (
    <>
      <Header />
      <main>
        <div>
            <div>
                <div>日付</div>
                <Image
                  src="/cookie"
                  width={100}
                  height={150}
                  alt="cookieから持ってきた写真"
                />
            </div>
            <div>
                <h2>ツアー名(Cookieから持ってくる）</h2>
                <p>ツアー詳細(Cookieから持ってくる)</p>
                <button>削除</button>
                <p>金額:cookieから持ってくる</p>
            </div>
        </div>


        <div>合計金額　✖︎✖️✖️✖️円</div>
      </main>
      <Footer />
    </>
  );
}
