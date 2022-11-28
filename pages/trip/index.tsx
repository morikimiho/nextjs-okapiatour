import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/toppage.module.css";
import { Header } from "../../component/header";
import { Footer } from "../../component/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { GetStaticProps } from "next";
import { getActiveTrips } from "../../service/trip";

export default function Home({tours}) {
  return (
    <>
      <Head>
        <title>trip</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <Slider />
        <div className={styles.subtitle}>新しい世界を見に行こう</div>
        <button type="button" className={styles.search}>
          <a href="#">
            &nbsp;&nbsp;search&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src="/images/top/虫眼鏡.png" alt="検索" width={16} height={16} />
          </a>
        </button>
      </div>
      {tours.map((tour: { id: number; img1: string; tourName: string; }) => {
            return(
                <>
                    <p><Image src={tour.img1} width={250} height={200} /></p>
                    <p>{tour.tourName}</p>
                </>
            );})}
      <Footer />
    </>
  );
}

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
          <div style={{ position: "relative", width: "100vw", height: "calc(100vh - 50px)" }}>
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
          <div style={{ position: "relative", width: "100vw", height: "calc(100vh - 50px)" }}>
            <Image
              className="slide-img"
              src="/images/top/flower.jpg"
              alt="花の画像"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ position: "relative", width: "100vw", height: "calc(100vh - 50px)" }}>
            <Image
              className="slide-img"
              src="/images/top/fuji.jpg"
              alt="富士山の画像"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SplideSlide>
      </Splide>

      {/* 画像の高さを揃えて表示させるために以下スタイルを適用 */}
      <style jsx>{`
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

function ItemDetail ({...tours}: { id: number, img1: string, tourName: string }) {
    return (
        <div>
            <Image src={tours.img1}
            width={100}
            height={75}
            alt="ツアーパッケージ"
            title={tours.tourName}
            className={styles.image}
            />
            <p>{tours.tourName}</p>
        </div>
    );
}


export async function getStaticProps() {
    const res = await fetch('http://localhost:8000/trips');
    const tours = await res.json();
    return {
      props: {tours},
    };
}
