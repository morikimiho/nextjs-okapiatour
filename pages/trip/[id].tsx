import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getActiveTrips, getTrip } from "../../service/trip";
import styles from "../../styles/tripdetail.module.css";
import { TripdetailContent } from "../../component/tripdetailContent";
import { TripdetailCount } from "../../component/tripdetailCount";
import { TripdetailAttention } from "../../component/tripdetailAttention";
import { TripdetailActivity } from "../../component/tripdetailActivity";
import { TripdetailImage } from "../../component/tripdetailImage";
import Layout from "../../component/layout";
import { TripdetailTimes } from "../../component/tripdetailTimes";

export const getStaticPaths: GetStaticPaths = async () => {
  const tours = await getActiveTrips();
  return {
    paths: tours.map((tour) => {
      return { params: { id: tour.id.toString() } };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id || Array.isArray(params.id)) {
    throw Error("エラー");
  }

  const id = parseInt(params.id);
  const tour = await getTrip(id);

  return {
    props: { tour },
    revalidate: 10,
  };
};

export default function Tripdetail({ tour }) {
  return (
    <>
      <Head>
        <title>{tour.tourName}</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <p>
            {tour.area} &nbsp;{tour.country}
          </p>

          <h1>{tour.tourName} </h1>
          <TripdetailImage tour={tour} />
          <p>{tour.description}</p>
          <div className={styles.tripinfo}>
            <TripdetailActivity tour={tour} />
            <TripdetailContent tour={tour} />
          </div>
          <div className={styles.tripdetail}>
            <div>
              <TripdetailCount tour={tour} />
              <TripdetailTimes tour={tour} />
            </div>
            <TripdetailAttention />
          </div>
          <br />
          <br />
          <div>
            合計金額(入れた人数の合計金額を出す？？)
            <br />
            XXXXXX円
          </div>
          <div className={styles.buttonposition}>
            <button className={styles.button}>予約に進む</button>
          </div>
        </main>
      </Layout>
    </>
  );
}
