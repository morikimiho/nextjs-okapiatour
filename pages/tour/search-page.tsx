import styles from "../../styles/search-page.module.scss";
import Head from "next/head";
import Layout from "../../component/layout";
import { useState } from "react";
import { EuropeCountry } from "../../component/serchPage/serchEurope";
import { France } from "../../component/serchPage/serchEurope";
import { Italy } from "../../component/serchPage/serchEurope";
import Image from "next/image";
import useSWR from "swr";
import {
  AsiaCountry,
  Korea,
  Indonesia,
} from "../../component/serchPage/serchAsia";

const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json());

const SearchPage = () => {
  type Area = "abroad" | "domestic";
  //国内 or 海外
  const [abroad, setAbroad] = useState<Area>("abroad");
  const[prefecture,setPrefecture]=useState("osk")
  const [areaCode, setArea] = useState("eu");
  const [eucountry, seteuCountry] = useState("fr");
  const [asicountry, setasiCountry] = useState("");

  const [url, setUrl] = useState("/api/tours?recommend=true");
  const { data, error } = useSWR(url, fetcher);
  // エラーになった場合は一覧は表示できないのでここで終わり
  if (error) return <div>failed to load</div>;
  // データ取得が完了していないときはローディング画面
  if (!data) return <div>loading...</div>;

  const onsubmitHandler = (e) => {
    e.preventDefault();
    setUrl(`/api/tours?abroad=${abroad}&prefecture=${prefecture}`);
  };

  const onAbroadChange = (val) => {
    setAbroad(val);
    setArea("");
    seteuCountry("");
    setasiCountry("");
  };

  const onAreaChange=(val)=>{
  setArea(val);
  seteuCountry("");
  setasiCountry("");
  }

  return (
    <>
      <Head>
        <title>ツアー検索</title>
      </Head>

      <Layout>
        <div className={styles.search_box_container}>
          <h3 className={styles.search_title}>現地ツアーを検索する</h3>
          <div className={styles.search_items}>
            <form action="" onSubmit={onsubmitHandler}>
              <div className={styles.flex}>
                <Abroad abroad={abroad} onAbroadChange={onAbroadChange} />
                {"abroad" === abroad && (
                  <RouteAbroad setArea={setArea} area={areaCode} onAreaChange={onAreaChange} />
                )}
                {"domestic" === abroad && <RouteJapan prefecture={prefecture} setprefecture={setPrefecture} />}
                {"eu" === areaCode && (
                  <EuropeCountry
                    seteuCountry={seteuCountry}
                    eucountry={eucountry}
                  />
                )}
                {"asi" === areaCode && (
                  <AsiaCountry
                    setasiCountry={setasiCountry}
                    asicountry={asicountry}
                  />
                )}
                {"fr" === eucountry && <France />}
                {"ita" === eucountry && <Italy />}
                {"ko" === asicountry && <Korea />}
                {"indo" === asicountry && <Indonesia />}
              </div>
              <button className={styles.search_submit}>検索</button>
            </form>
          </div>
        </div>

        <div>
          {data.map((item: any) => {
            return (
              <div key={item.id} className={styles.flex}>
                <Image src={item.img1} width={150} height={100} />
                <div>
                  <p>{item.tourName}</p>
                  <p>{item.area}</p>
                  <p>{item.country}</p>
                </div>
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
const Abroad = ({ abroad, onAbroadChange }) => {
  const changeHandler = (e) => {
    onAbroadChange(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">国内 or 海外</label>
          </div>
          <select value={abroad} name="" id="" onChange={changeHandler}>
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
const RouteAbroad = ({ area,onAreaChange }) => {
  const changeHandler = (e) => {
    onAreaChange(e.target.value);
  };

  return (
    <div className={styles.flex}>
      <div>
        <div>
          <label htmlFor="">エリア</label>
        </div>
        <select value={area} name="" id="" onChange={changeHandler}>
        <option value="">-</option>
          <option value="eu">ヨーロッパ</option>
          <option value="asi">アジア</option>
        </select>
      </div>
      <div className={styles.serchdetail}></div>
    </div>
  );
};

// 国内を選んだ場合
const RouteJapan = ({setPrefecture}) => {

  const changeHandler=(e)=>{
  setPrefecture(e.target.value)
  }
  return (
    <div>
      <div>
        <div>
          <label htmlFor="">都道府県</label>
        </div>
        <select name="" id="" onChange={changeHandler}>
          <option value="osk">大阪</option>
          <option value="hokka">北海道</option>
          <option value="oki"> 沖縄</option>
        </select>
      </div>
    </div>
  );
};