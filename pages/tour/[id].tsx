import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getActiveTrips, getTrip } from "../../service/trip";
import styles from "../../styles/tripdetail.module.css";
import Image from "next/image";
import Layout from "../../component/layout";


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
<<<<<<< HEAD:pages/trip/[id].tsx
          <h1>{trip.tourName} </h1>
          <Image src={trip.img1} alt={"ツアー画像"} width={200} height={100} />
          <p>{trip.description}</p>
=======
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
>>>>>>> main:pages/tour/[id].tsx
          <br />
          <div>
            合計金額(入れた人数の合計金額を出す？？)
            <br />
            XXXXXX円
          </div>
        </main>
      </Layout>
    </>
  );
}
