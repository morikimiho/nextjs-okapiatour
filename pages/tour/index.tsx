import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/toppage.module.css";
import { Header } from "../../component/header";
import { Footer } from "../../component/footer";
import { ScrTop } from "../../component/tps";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { useState,useMemo } from "react";
import { SearchBox } from "../../component/serchPage/SearchBox";
import { SearchResult } from "../../component/serchPage/SearchResult";
import { Abroad, Area, City, Country, Prefecture } from "../../types/types";
import { supabase } from "../../utils/supabaseClient";
import useSWR from "swr";

// const fetcher = (resource: any, init: any) =>
//   fetch(resource, init).then((res) => res.json());
  
export default function Home() {
  const [url, setUrl] = useState("/api/supabase");

  const [abroad, setAbroad] = useState<Abroad>("abroad");
  const [prefecture, setPrefecture] = useState<Prefecture>("");
  const [areaCode, setArea] = useState<Area>("");
  const [country, setCountry] = useState<Country>("");
  const [city, setCity] = useState<City>("");

  const [isOpen, setIsOpen] = useState(true);

  setTimeout(() => {
    setIsOpen(false);
  }, 0.8 * 1000);
  const [isDisplay, setIsDisplay] = useState(true);
  setTimeout(() => {
    setIsDisplay(false);
  }, 2 * 1000);

  // const { data, error } = useSWR('../api/supabase', fetcher, { refreshInterval: 1000 });
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  // console.log("data",data);
  // console.log("url",url);

  const Slider = () => {
    return (
      <>
        <Splide
          aria-label="トップページ"
          options={{
            autoplay: true, // 自動再生を有効
            interval: 3000, // 自動再生の間隔を3秒に設定
          }}
        >
          <SplideSlide>
            <div className={styles.top_image}>
              <Image
                className="slide-img"
                src="/images/top/scenery.jpg"
                alt="風景の画像"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.top_image}>
              <Image
                className="slide-img"
                src="/images/top/flower.jpg"
                alt="花の画像"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SplideSlide>
          {/* <SplideSlide>
            <div className={styles.top_image}>
              <Image
                className="slide-img"
                src="/images/top/fuji.jpg"
                alt="富士山の画像"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SplideSlide> */}
        </Splide>
      </>
    );
  };
  // const SearchResultMemo=useMemo(()=> <SearchResult  url={url}/>,[url])
  return (
    <div>
      <Head>
        <title>Okapia Tour</title>
      </Head>

      {/* トップページアニメーション */}
      <div
        className={styles.logos}
        style={{
          transition: "1s",
          opacity: isOpen ? 1 : 0,
          display: isDisplay ? "block" : "none",
        }}
      >
        <div className={styles.logo}>
          <Image
            className={styles.fadeUp}
            src="/images/logo_cover3.png"
            alt="検索"
            layout="fill"
          />
        </div>
      </div>

      <Header />
      <div className={styles.container}>
        <Slider />
      </div>
      <div className={styles.search_box}>
        <SearchBox
          abroad={abroad}
          country={country}
          prefecture={prefecture}
          areaCode={areaCode}
          city={city}
          setAbroad={setAbroad}
          setCountry={setCountry}
          setPrefecture={setPrefecture}
          setArea={setArea}
          setCity={setCity}
          setUrl={setUrl}
        />
      </div>
      {/* {SearchResultMemo} */}
      <SearchResult url={url} />
      <Footer />
    </div>
  );
}
