import styles from "../../styles/search-page.module.scss";
import Head from "next/head";
import Layout from "../../component/layout";
import { useState } from "react";
import { EuropeCountry } from "../../component/serchPage/serchEurope";
import { AsiaCountry } from "../../component/serchPage/serchAsia";
import { Oceania } from "../../component/serchPage/searchOceania";

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
  type Area = "1" | "2";
  const [abroad, setAbroad] = useState<Area>("2");
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
          <option value="1">海外</option>
            <option value="2">国内</option>
            
          </select>
        </div>

        <div className={styles.serchdetail}>
          {"1" === abroad && <RouteAbroad />}
          {"2" === abroad && <RouteJapan />}
        </div>
      </div>
    </>
  );
};

// 海外を選んだ場合
const RouteAbroad = () => {
  const [area, setArea] = useState("ヨーロッパ");
  const changeHandler = (e) => {
    setArea(e.target.value);
  };

  return (
    <div className={styles.flex}>
      <div>
        <div>
          <label htmlFor="">エリア</label>
        </div>
        <select name="" id="" onChange={changeHandler}>
          <option>ヨーロッパ</option>
          <option>アジア</option>
          <option>オセアニア</option>
        </select>
      </div>
      <div className={styles.serchdetail}>
        {"ヨーロッパ" === area && <EuropeCountry />}
        {"アジア" === area && <AsiaCountry />}
        {"オセアニア" === area && <Oceania />}
      </div>
    </div>
  );
};


// 国内を選んだ場合
const RouteJapan = () => {
  return (
    <div>
      <div>
        <div>
          <label htmlFor="">都道府県</label>
        </div>
        <select name="" id="">
          <option value="">大阪</option>
          <option value="">北海道</option>
          <option value=""> 沖縄</option>
        </select>
      </div>
    
    </div>
  );
};
