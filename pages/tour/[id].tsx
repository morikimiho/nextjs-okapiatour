import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import styles from "../../styles/tripdetail.module.css";
import { TripdetailContent } from "../../component/tripdetailContent";
import { TripdetailCount } from "../../component/tripdetailCount";
import { TripdetailAttention } from "../../component/tripdetailAttention";
import { TripdetailActivity } from "../../component/tripdetailActivity";
import { TripdetailImage } from "../../component/tripdetailImage";
import Layout from "../../component/layout";
import { TripdetailTimes } from "../../component/tripdetailTimes";
import { ScrTop } from "../../component/tps";
import { useState } from "react";
import router, { useRouter } from "next/router";
import useCookie from "../../hooks/useCookie";
// import { ErrorCheck } from "../../component/errorCheck";

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
  const res = await fetch(`http://localhost:8000/tours/${params?.id}`);
  const tour = await res.json();
  return {
    props: { tour },
    revalidate: 10,
  };
};

export default function Tripdetail({
  tour,
}: {
  tour: {
    id: number;
    img1: string;
    tourName: string;
    description: string;
    price: number;
    times: number;
    area: string;
    country: string;
  };
}) {
  const [tourDate, setTourDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const router = useRouter();
  const cookie = useCookie();
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);

  async function PostData(e: { preventDefault: () => any; }) {
    if(dateError === false || timeError === false) {
      alert("日付もしくは時間が指定されていません");
      return e.preventDefault();
    } 

    const loginId = cookie.loginId;

    if (!loginId) {
      const toursJSON = localStorage.getItem("tours");
      const setNewData = {
        tours: [
          {
            id: tour.id,
            tourDate: tourDate, //新規データ
            startTime: startTime, //新規データ
            img1: tour.img1,
            tourName: tour.tourName,
            description: tour.description,
            numberOfPeople: numberOfPeople, //新規データ
            price: Number(tour.price),
            total: Number(tour.price * numberOfPeople),
          },
        ],
      };
      if (toursJSON === null) {
        localStorage.setItem("tours", JSON.stringify(setNewData));
      } else {
        const tours = JSON.parse(toursJSON);
        const addTourData = {
           tours:
          [...tours.tours,
          {id:tour.id,
            tourDate: tourDate, //新規データ
            startTime: startTime, //新規データ
            img1: tour.img1,
            tourName: tour.tourName,
            description: tour.description,
            numberOfPeople: numberOfPeople, //新規データ
            price: Number(tour.price),
            total: Number(tour.price * numberOfPeople),

          }]};
        localStorage.setItem('tours',JSON.stringify(addTourData));
      }

      router.push("http://localhost:3000/tour/cart");
    } else {
      const res = await fetch(
        `http://localhost:8000/inCarts?userId=${loginId}`
      );
      const inCarts = await res.json();
      {
        inCarts.map(
          async (cart: {
            id: number;
            tours: {
              id: number;
              tourDate: string; //新規データ
              startTime: string; //新規データ
              img1: string;
              tourName: string;
              description: string;
              numberOfPeople: number; //新規データ
              price: number;
              total: number;
            }[];
          }) => {
            await fetch(`http://localhost:8000/inCarts/${cart.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                tours: [
                  ...cart.tours,
                  {
                    id: tour.id,
                    tourDate: tourDate, //新規データ
                    startTime: startTime, //新規データ
                    img1: tour.img1,
                    tourName: tour.tourName,
                    description: tour.description,
                    numberOfPeople: numberOfPeople, //新規データ
                    price: Number(tour.price),
                    total: Number(tour.price * numberOfPeople),
                  },
                ],
                userId: loginId,
                id: cart.id,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                router.push("http://localhost:3000/tour/cart");
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }
        );
      }
    }
  }

  return (
    <>
      <Head>
        <title>{tour.tourName}</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <div className={styles.tour_tags}>
            {tour.area.length > 0 && (
              <div className={styles.tour_tag}>{tour.area}</div>
            )}
            <div className={styles.tour_tag}>{tour.country}</div>
          </div>
          <h1 className={styles.tour_title}><span>{tour.tourName}</span></h1>
          <TripdetailImage tour={tour} />
          <p className={styles.tour_description}>{tour.description}</p>


          <div className={styles.tour_detail_info}>

           <div className={styles.tour_detail_info_items}>
            <TripdetailActivity tour={tour} />  {/* // アクティビティ概要 */}
            <TripdetailContent tour={tour} />   {/* // 含まれるもの */}
           </div>



            <div className={styles.tour_detail_info_items}> {/* // 人数 時間 時間 */}
              <div className={styles.times}>
                <TripdetailCount setNumberOfPeople={setNumberOfPeople} />
                <TripdetailTimes
                  tour={tour}
                  setTourDate={setTourDate}
                  setStartTime={setStartTime}
                  dateError={dateError}
                  setDateError={setDateError}
                  timeError={timeError}
                  setTimeError={setTimeError}
                />
              </div>
              <TripdetailAttention /> {/* // 注意事項 */}
            </div>



            <div className={styles.button_position}>
              <button className={styles.button} onClick={PostData}>
                カートに入れる
              </button>
            </div>
          </div>{/* tour_detail_info */}

        </main>
        <ScrTop />
      </Layout>
    </>
  );
}
