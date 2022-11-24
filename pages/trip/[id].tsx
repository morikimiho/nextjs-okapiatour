import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getActiveTrips, getTrip } from "../../service/trip";
import Image from "next/image";
import styles from "../../styles/tripdetail.module.css";



export const getStaticPaths: GetStaticPaths = async () => {
  const trips = await getActiveTrips();
  return {
    paths: trips.map((trip) => {
      return { params: { id: trip.id.toString() } };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id || Array.isArray(params.id)) {
    throw Error("エラー");
  }

  const id = parseInt(params.id);
  const trip = await getTrip(id);

  return {
    props: { trip },
    revalidate: 10,
  };
};

export default function Tripdetai({ trip }) {
  return (
    <>
      <Head>
        <title>{trip.tourName}</title>
      </Head>
      <main className={styles.main}>
        <p>
          {trip.area} &nbsp;{trip.country}
        </p>

        <h1>パリ発：モン サン ミシェル 1日ツアー </h1>
        <Image
          src={trip.img1}
          alt="モンサンミッシェルの画像"
          width={220}
          height={150}
        />
        <Image
          src={trip.img2}
          alt="モンサンミッシェルの画像"
          width={220}
          height={150}
        />
        <Image
          src={trip.img3}
          alt="モンサンミッシェルの画像"
          width={220}
          height={150}
        />
        <p>{trip.description}</p>
        <h2>アクティビティ概要</h2>
        <div>
          <ul>
            <li className={styles.cancel}>
              無料キャンセル(ご出発日三日目まで）
            </li>
            <li>今すぐ予約＆後で支払う</li>
            <li>所要時間:{trip.times}</li>
            <li>最小催行人数:{trip.minPeople}</li>
            <li>集合場所:{trip.meetingPlace}</li>
            <li>金額:{trip.price}</li>
          </ul>
        </div>
        <div className={styles.tripdetail}>
          <div>
            <div>
              <p>参加人数を選択してください</p>
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <p>希望の日付を選択してください</p>
              <input type="date" />
            </div>
            <div>
            
              <p>希望の時間帯を選択してください</p>
              <select name="" id="">
                {/* {{trip.time}} */}
                <option value="1">9:00</option>
                <option value="1">10:00</option>
              </select>
            </div>
          </div>
          <div className={styles.attention}>
            <h3>注意事項</h3>
            <ul>
              <li>ランチは含まれておりません。</li>
              <li>集合場所までは各自でお越しください。</li>
              <li>所要時間は交通渋滞などにより変更する可能性がございます。</li>
            </ul>
          </div>
        </div>
        <br /><br />
        <div>合計金額(入れた人数の合計金額を出す？？）<br />XXXXXX円</div>
        <div className={styles.buttonposition}>
          <button className={styles.button}>予約に進む</button>
        </div>
      </main>
    </>
  );
}
