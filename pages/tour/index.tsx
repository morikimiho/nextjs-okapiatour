import Head from "next/head";
import Image from "next/legacy/image";
import styles from "../../styles/toppage.module.css";
import { Header } from "../../component/header";
import { Footer } from "../../component/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { useState, useMemo } from "react";
import { SearchBox } from "../../component/serchPage/SearchBox";
import { SearchResult } from "../../component/serchPage/SearchResult";
import { supabase } from "../../utils/supabaseClient";
import { Info } from "../../types/types";
import { Infomation } from "../../component/info";

export const getStaticProps = async () => {
  const {data, error} = await supabase.from("info").select("*");
  if (!data) return;
  if (error) return;

  return {
    props: {
      data
    }
  }
}
export default function Home({data}:{data:Info[]}) {
  const [url, setUrl] = useState("/api/supabaseTours");
  const[subtitle,setSubtitle]=useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [displayInfo, setDisplayInfo] = useState(true);


  setTimeout(() => {
    setIsOpen(false);
  }, 0.8 * 1000);
  const [isDisplay, setIsDisplay] = useState(true);
  setTimeout(() => {
    setIsDisplay(false);
  }, 2 * 1000);

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
                priority
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
        </Splide>
      </>
    );
  };

  const SearchResultMemo = useMemo(() => <SearchResult url={url} subtitle={subtitle}/>, [url]);
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
            priority
          />
        </div>
      </div>

      <Header />
      <div className={styles.container}>
        <Slider />
      </div>
      <div className={styles.search_box}>
        <SearchBox setUrl={setUrl} setSubtitle={setSubtitle} setDisplayInfo={setDisplayInfo}/>
      </div>
      <div style={{display: displayInfo ? "block" : "none"}} >
        {<Infomation data={data}  />}
      </div>
      <div>{SearchResultMemo}</div>
      <Footer />
    </div>
  );
}
