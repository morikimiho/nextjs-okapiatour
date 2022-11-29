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
import { useState } from "react";
import router from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/tours");
  const tours = await res.json();
  const paths = tours.map((tour: { id: number }) => {
    return {
      params: {
        id: tour.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/tours/${params.id}`);
  const tour = await res.json();
  return {
    props: { tour },
    revalidate: 10,
  };
};

export default function Tripdetail({ tour }:{tour:{
  img1:string
  tourName:string
  description:string
  price:number
  times:number
  area:string
  country:string
}}) {
  const [tourDate, setTourDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  async function PostData() {
    const data = {
      tourDate: tourDate,//新規データ
      startTime: startTime, //新規データ
      img1: tour.img1,
      tourName: tour.tourName,
      description: tour.description,
      numberOfPeople: numberOfPeople,//新規データ
      price: tour.price,
      total: tour.price*numberOfPeople
    }
    // if(login === true) {
      await fetch('http://localhost:8000/inCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
  
  
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          // router.push('http://localhost:3000/tour/cart')
      })
      .catch((error) => {
          console.error('Error:', error);
      });
      
    // } else {
    //   localStorage.setItem(tourDate,tourDate)
    //   localStorage.setItem(img1, tour.img1),
    //   localStorage.setItem(tourName, tour.tourName),
    //   localStorage.setItem(description, tour.description),
    //   localStorage.setItem(countPeople, countPeople),//新規データ
    //   localStorage.setItem(price, tour.price)
    //   localStorage.setItem(total, tour.price*numberOfPeople)
    // }
  }

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
              <TripdetailCount setNumberOfPeople={setNumberOfPeople}/>
              <TripdetailTimes tour={tour} setTourDate={setTourDate} setStartTime={setStartTime} />
            </div>
            <TripdetailAttention />
          </div>
          <br />
          <br />
          <div className={styles.buttonposition}>
            <button className={styles.button} onClick={PostData}>カートに入れる</button>
          </div>
        </main>
      </Layout>
    </>
  );
}
