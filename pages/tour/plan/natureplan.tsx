import Layout from "../../../component/layout";
import style from "../../../styles/domestic.module.css";
import { supabase } from "../../../utils/supabaseClient";
import { Tour } from "../../../types/types";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("nature", true)
    .order("areaId", {ascending:true});
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
        <title>自然を感じるツアー</title>
      </Head>
      <Layout>
        <Image src="/images/plan/nature01.jpg" alt="自然" width={996} height={466} className={style.natureImage}/>
          <div className={style.natureMessage}>
            ツアー特集
            <br />
            自然の力で浄化！
          </div>
        <div className={style.container}>
          <div className={style.submessage}>
            あけましておめでとうございます！新年が始まり心機一転ですね！自然からパワーをもらい、縁起のよい年にしましょう！下記から海外・国内のツアーをチェックすることができます。
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
                        <div className={style.blockCont}>
                            <div className={style.nationName}>{tour.country}</div>
                            <div className={style.cityname}>{tour.city}</div>
                        </div>
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
