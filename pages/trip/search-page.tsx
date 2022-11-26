import styles from "../../styles/search-page.module.scss";
import Head from "next/head";
import Layout from "../../component/layout";
import { useState } from "react";

// className={styles.}

const SearchPage = () => {
  return (
    <>
      <Head>
        <title>ツアー検索</title>
      </Head>

      <Layout>
        <div className={styles.search_box_container}>
          <form>
            <h3 className={styles.search_title}>現地ツアーを検索する</h3>
            <div className={styles.search_items}>
              <div>
                <Abroad />
              </div>

              <button className={styles.search_submit}>検索</button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};
export default SearchPage;

//国内or 海外
const Abroad = () => {
  type Area = "国内" | "海外";
  const [abroad, setAbroad] = useState<Area>("国内");
  const changeHandler = (e: any) => {
    setAbroad(e.target.value);
  };

  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">国内 or 海外</label>
          </div>
          <select name="" id="" onChange={changeHandler}>
            <option>国内</option>
            <option>海外</option>
          </select>
        </div>

        <div>
          {"海外" === abroad && <RouteAbroad />}
          {"国内" === abroad && <RouteJapan />}
        </div>
      </div>
    </>
  );
};

// 海外を選んだ場合
const RouteAbroad = () => {
  const [area, setArea] = useState("");
  const changeHandler = (e) => {
    setArea(e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="">エリア</label>
      </div>
      <select name="" id="" onChange={changeHandler}>
        <option>ヨーロッパ</option>
        <option>アジア</option>
        <option>オセアニア</option>
      </select>
      {"ヨーロッパ" === area && <EuropeCountry />}
      {"アジア" === area && <AsiaCountry />}
      {"オセアニア" === area && <Oceania />}
    </div>
  );
};

//　海外→アジアを選んだ場合
const AsiaCountry = () => {
  const [country, setCountery] = useState("韓国");
  const changeHandler = () => {
    setCountery(e.target.value);
  };

  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">国</label>
          </div>
          <select name="" id="" onChange={changeHandler}>
            <option>韓国</option>
            <option>インドネシア</option>
          </select>
        </div>
        <div>
          {"韓国" === country && <Korea />}
          {"インドネシア" === country && <Indonesia />}
        </div>
      </div>
    </>
  );
};

//海外→ヨーロッパを選んだ場合
const EuropeCountry = () => {
  const [country, setCountery] = useState("フランス");
  const changeHandler = () => {
    setCountery(e.target.value);
  };
  return (
    <>
      <div className={styles.fles}>
        <div>
          <div>
            <label htmlFor="">国</label>
          </div>
          <select name="" id="" onChange={changeHandler}>
            <option>フランス</option>
            <option>イタリア</option>
          </select>
        </div>
        <div>
          {"フランス" === country && <France />}
          {"イタリア" === country && <Italy />}
        </div>
      </div>
    </>
  );
};

//海外→オセアニアを選んだ場合
const Oceania = () => {
  const [country, setCountery] = useState("オーストリア");
  const changeHandler = () => {
    setCountery(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">国</label>
          </div>
          <select name="" id="" onChange={changeHandler}>
            <option>オーストラリア</option>
          </select>
        </div>
        <div>{"オーストラリア" === country && <Australia />}</div>
      </div>
    </>
  );
};

// 国内を選んだ場合
const RouteJapan = () => {
  const [prefecture, setPrefecture] = useState("大阪");
  const changeHandler = () => {
    setPrefecture(e.target.value);
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor="">都道府県</label>
        </div>
        <select name="" id="" onChange={changeHandler}>
          <option value="">大阪</option>
          <option value="">北海道</option>
          <option value=""> 沖縄</option>
        </select>
      </div>
      <div>
        {"大阪" === prefecture && <Osaka />}
        {"北海道" === prefecture && <Hokkaido />}
        {"沖縄" === prefecture && <Okinawa />}</div>
    </div>
  );
};
