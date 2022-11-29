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
  type Abroad = "abroad" | "domestic" | "";
  const [abroad, setAbroad] = useState<Abroad>("abroad");
  type Prefecture = "osk" | "";
  const [prefecture, setPrefecture] = useState<Prefecture>("osk");
  type Area = "eu" | "asi" | "";
  const [areaCode, setArea] = useState<Area>("eu");
  type Country = "fr" | "ita" | "ko" | "indo" | "";
  const [country, setCountry] = useState<Country>("fr");
  // type Asi="ko"|"indo"|"";
  // const [country, setCountry] = useState<Asi>("");

  const [url, setUrl] = useState("/api/tours?recommend=true");
  const { data, error } = useSWR(url, fetcher);
  // エラーになった場合は一覧は表示できないのでここで終わり
  if (error) return <div>failed to load</div>;
  // データ取得が完了していないときはローディング画面
  if (!data) return <div>loading...</div>;

  const onsubmitHandler = (e) => {
    e.preventDefault();
    let query = "?";

    if (abroad.length > 0) {
      if (areaCode.length > 0) {
        if (country.length > 0) {
          query =
            query +
            `abroad=${abroad}&areaCode=${areaCode}&countryCode=${country}`;
        } else {
          query = query + `abroad=${abroad}&areaCode=${areaCode}`;
        }
      } else {
        query = query + `abroad=${abroad}`;
      }
    }

    setUrl(`/api/tours${query}`);
  };

  //areaCode=${areadCode}

  const onAbroadChange = (val) => {
    setAbroad(val);
    setArea("");
    setCountry("");
  };

  const onAreaChange = (val) => {
    setArea(val);
    setCountry("");
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
            <form action="" onSubmit={onsubmitHandler}>
              <div className={styles.flex}>
                <Abroad abroad={abroad} onAbroadChange={onAbroadChange} />
                {"abroad" === abroad && (
                  <RouteAbroad area={areaCode} onAreaChange={onAreaChange} />
                )}
                {"domestic" === abroad && (
                  <RouteJapan
                    prefecture={prefecture}
                    setPrefecture={setPrefecture}
                  />
                )}
                {"eu" === areaCode && (
                  <EuropeCountry setCountry={setCountry} country={country} />
                )}
                {"asi" === areaCode && (
                  <AsiaCountry setCountry={setCountry} country={country} />
                )}
                {"fr" === country && <France />}
                {"ita" === country && <Italy />}
                {"ko" === country && <Korea />}
                {"indo" === country && <Indonesia />}
              </div>
              <button className={styles.search_submit}>検索</button>
            </form>
          </div>
        </div>

        <div>
          {data.map((item: any) => {
            return (
              <div key={item.id} className={styles.flex}>
                <Image src={item.img1} width={150} height={100} alt="画像" />
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
const RouteAbroad = ({ area, onAreaChange }) => {
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
const RouteJapan = ({ setPrefecture, prefecture }) => {
  const changeHandler = (e) => {
    setPrefecture(e.target.value);
  };
  return (
    <div>
      <div>
        <div>
          <label htmlFor="">都道府県</label>
        </div>
        <select value={prefecture} name="" id="" onChange={changeHandler}>
          <option value="osk">大阪</option>
          <option value="hokka">北海道</option>
          <option value="oki"> 沖縄</option>
        </select>
      </div>
    </div>
  );
};
