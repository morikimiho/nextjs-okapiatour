import styles from "../styles/search-page.module.scss";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../component/header";
import Layout from "../component/layout";

// className={styles.}

const SearchPage = () => {
  return (
    <>
      <Head>
        <title>ツアー検索</title>
      </Head>

      <Layout>
        <section className={styles.search_box}>
          <div className={styles.search_box_container}>
            <form>
              <h3>現地ツアーを検索する</h3>
              <div className={styles.search_items}>
                <select
                  className={styles.input_abroad}
                  id="abroad"
                  name="abroad"
                >
                  <Abroad />
                </select>

                <RouteAbroad />
                {/* <RouteJapan /> */}

                <button>検索</button>
              </div>
            </form>
          </div>
        </section>
        {/* search_box */}

        {/* 検索結果をマップで回して下記に表示？ */}
        <section className={styles.search_result}>
          <div className={styles.search_result_container}>
            <div
              style={{ position: "relative", width: "50%", height: "200px" }}
            >
              <Image
                className="slide-img"
                src="/images/scenery.jpg"
                alt="風景の画像"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className={styles.tour_detail}>
              <h3>ツアータイトル</h3>
              <div className="tour_detail_description">
                <div>楽しい</div>
                <div>楽しい</div>
                <div>楽しい</div>
              </div>
              <button>詳細はこちら</button>
            </div>
          </div>
        </section>
        {/* search_result */}
      </Layout>
    </>
  );
};
export default SearchPage;

// 検索窓　めっちゃ分岐しそう
const Abroad = () => {
  return (
    <>
      <option value="">-</option>
      <option value="1">国内</option>
      <option value="2">海外</option>
    </>
  );
};

// 海外を選んだ場合
const RouteAbroad = () => {
  return (
    <div className={styles.route_abroad}>
      <select className={styles.input_abroad} id="region" name="region">
        <AreaAbroad />
      </select>

      <select className={styles.input_abroad} id="Abroad" name="Abroad">
        <CountryAbroad />
      </select>

      <select className={styles.input_abroad} id="Abroad" name="Abroad">
        <CityAbroad />
      </select>
    </div>
  );
};
const AreaAbroad = () => {
  return (
    <>
      <option value="">-</option>
      <option value="1">ヨーロッパ</option>
      <option value="2">アフリカ</option>
    </>
  );
};
const CountryAbroad = () => {
  return (
    <>
      <option value="">-</option>
      <option value="1">フランス</option>
      <option value="2">イタリア</option>
    </>
  );
};
const CityAbroad = () => {
  return (
    <>
      <option value="">-</option>
      <option value="1">パリ</option>
      <option value="2">ブルゴーニュ</option>
    </>
  );
};

// 国内を選んだ場合
// const RouteJapan = () => {
//     return (
//            <div className={styles.route_japan}>
//               <select className={styles.input_abroad} id="region" name="region">
//                 <AreaJapan />
//               </select>

//               <select className={styles.input_abroad} id="Abroad" name="Abroad">
//                 <CountryJapan />
//               </select>

//               <select className={styles.input_abroad} id="Abroad" name="Abroad">
//                 <CityJapan />
//               </select>
//         </div>
//     )
// }
