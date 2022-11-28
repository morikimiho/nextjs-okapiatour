import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getActiveTrips, getTrip } from "../../service/trip";
import styles from "../../styles/tripdetail.module.css";
import Image from "next/image";
import Layout from "../../component/layout";


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

export default function Tripdetail({ trip }) {
  return (
    <>
      <Head>
        <title>{trip.tourName}</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1>{trip.tourName} </h1>
          <Image src={trip.img1} alt={"ツアー画像"} width={200} height={100} />
          <p>{trip.description}</p>
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
