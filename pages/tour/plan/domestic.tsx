import Layout from "../../../component/layout";
import style from "../../../styles/domestic.module.css";
import Image from "next/legacy/image";
import { supabase } from "../../../utils/supabaseClient";
import { Tour } from "../../../types/types";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("winterplan", true);
  if (!data) return;
  if (error) console.log(error);

  return {
    props: {
      data,
    },
  };
};

export default function WinterPlan({ data }: { data: Tour[] }) {
  return (
    <>
      <Head>
        <title>国内冬ツアー</title>
      </Head>
      <Layout>
        <div className={style.topImage}>
          <div className={style.topmessage}>
            ツアー特集
            <br />
            日本の冬を楽しもう
          </div>
        </div>
        <div className={style.container}>
          <div className={style.submessage}>
            日本の冬と言えば何を思い浮かべますか？雪景色、イルミネーション、心も身体も温まるグルメなど…あなたが楽しめるツアーが盛りだくさん！おすすめのツアーをチェックしてみましょう！
          </div>
          <div className={style.down}>
            <img src="/images/plan/down96.png" alt="スクロール" />
          </div>
          <div className={style.tourwrapper}>
            {data.map((tour) => {
              return (
                <>
                  <div className={style.tourcont}>
                    <img src={tour.img1} alt="画像" className={style.image} />
                    <div className={style.detail}>
                      <div className={style.cityname}>{tour.city}</div>
                      <div className={style.tourName}>{tour.tourName}</div>
                      価格：{tour.price.toLocaleString()}円〜
                      <Link href={`/tour/${tour.id}`}>
                        <div className={style.button}>詳細はこちら</div>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
