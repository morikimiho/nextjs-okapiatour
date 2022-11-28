import styles from "../../styles/search-page.module.scss";
import Head from "next/head";
import Layout from "../../component/layout";
import { useState } from "react";
import { EuropeCountry } from "../../component/serchPage/serchEurope";
import { AsiaCountry } from "../../component/serchPage/serchAsia";
import { Oceania } from "../../component/serchPage/searchOceania";
import { France } from "../../component/serchPage/serchEurope";
import { Italy } from "../../component/serchPage/serchEurope";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json());

const SearchPage = () => {
  
  type Area = "abroad" | "domestic";
  //国内 or 海外
  const [abroad, setAbroad] = useState<Area>("abroad");
  //ヨーロッパorアジアorオセアニア
  const [area, setArea] = useState("eu");
  //フランス or イタリア
  const [eucountry, seteuCountry] = useState("fr");
  //韓国 or インドネシア
  const [asicountry, setasCountry] = useState("asi");
  //オーストラリア
  const [occountry, setocCountry] = useState("oce");
  
  const [url, setUrl] = useState("/api/tours?recommend=true");
  const { data, error } = useSWR(url, fetcher);
    // エラーになった場合は一覧は表示できないのでここで終わり
    if (error) return <div>failed to load</div>;
    // データ取得が完了していないときはローディング画面
    if (!data) return <div>loading...</div>;

  const clickHandler = () => {
    setUrl(`/api/tours?abroad=abroad&areaCode=area`);
    
  };

  return (
    <>
      <Head>
        <title>ツアー検索</title>
      </Head>

      <Layout>
        <div className={styles.search_box_container}>
          <h3 className={styles.search_title}>現地ツアーを検索する</h3>
          <div className={styles.search_items}>
            <form action="" onSubmit={clickHandler}>
              <div className={styles.flex}>
                <Abroad setAbroad={setAbroad} />
                {"abroad" === abroad && <RouteAbroad setArea={setArea} />}
                {"domestic" === abroad && <RouteJapan />}
                {"eu" === area && <EuropeCountry seteuCountry={seteuCountry} />}
                {"asi" === area && <AsiaCountry setasiCountry={setasCountry} />}
                {"oce" === area && <Oceania setocCountry={setocCountry}  />}
                {"1" === eucountry && <France />}
                {"2" === eucountry && <Italy />}
              </div>
              <button className={styles.search_submit}>検索</button>
            </form>
          </div>
        </div>

        <div>
          {data.map((item: any) => {
            return (
              <div key={item.id}>
                <p><Image src={item.img1} width={150} height={100}/></p>
                <p>{item.tourName}</p>
                <p>{item.area}</p>
                <p>{item.country}</p>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};
export default SearchPage;

//国内or 海外
const Abroad = ({ setAbroad }) => {
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
            <option value="abroad">海外</option>
            <option value="domestic">国内</option>
          </select>
        </div>

        <div className={styles.serchdetail}></div>
      </div>
    </>
  );
};

// 海外を選んだ場合
const RouteAbroad = ({ setArea }) => {
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
          <option value="eu">ヨーロッパ</option>
          <option value="asi">アジア</option>
          <option value="oce">オセアニア</option>
        </select>
      </div>
      <div className={styles.serchdetail}></div>
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
