import Layout from "../../../component/layout";
import style from "../../../styles/domestic.module.css";
import Image from "next/legacy/image";
import { supabase } from "../../../utils/supabaseClient";
import { Tour } from "../../../types/types";

 export const getStaticProps = async () => {
  const { data, error } = await supabase.from("tours").select("*").eq("winterplan", true);
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
      <Layout>
        <div className={style.topImage}>
          <div className={style.topmessage}>
            ツアー特集
            <br />
            日本の冬を楽しもう
          </div>
        </div>
        <div className={style.container}>
          <div>
            日本の冬と言えば何を思い浮かべますか？雪景色、イルミネーション、心も身体も温まるグルメなど…あなたが楽しめるツアーが盛りだくさん！おすすめのツアーをチェックしてみましょう！
          </div>
          <div className={style.tourwrapper}>
          {data.map((tour) => {
            return (
                <>
                    <div className={style.tourcont}>
                    <img src={tour.img1} alt="画像" className={style.image} />
                    {tour.city}
                    </div>
                </>
            )
          })}
          </div>
        </div>
      </Layout>
    </>
  );
}
