import styles from "../../styles/booking_confirmation.module.css";
import Head from "next/head";
import Layout from "../../component/layout";
import useCookie from "../../hooks/useCookie";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Order } from "../../types/types";
import { supabase } from "../../utils/supabaseClient";

export default function BookingConfirmation() {
  const cookie = useCookie();

  const loginName = cookie.loginName;
  const loginId = cookie.loginId;
  const [okastatus, setOkastatus] = useState("/images/status/worm.png");

  useEffect(() => {
    ConfData();
  }, [loginId]);
  const [data, setData] = useState<Order[]>([]);
  const [point, setPoint] = useState<any>(0);
  const ConfData = async () => {
    if (!loginId) return;
    let { data, error } = await supabase
      .from("orders")
      .select(`*`)
      .eq("userId", loginId)
      .order(`id`, { ascending: false });
    if (!data) return;
    if (error) return;
    setData(data);

    //ポイント情報を取得
    let point = await supabase
      .from(`users`)
      .select(`OkaPoint`)
      .eq("id", loginId);

    //usersのポイントを取得
    let userp = point.data;
    if (!userp) return;
    setPoint(userp[0].OkaPoint);
  };

  //ステータス表示
  let status = "/images/status/hamster.png";
  if (point >= 500) {
    status = "/images/status/hamster.png";
    if (point >= 1000) {
      status = "/images/status/cat.png";
      if (point >= 1500) {
        status = "/images/status/lion.png";
        if (point >= 2000) {
          status = "/images/status/mascle-human.png";
        }
      }
    }
  }

  useEffect(() => {
    setOkastatus(status);
  },[status]);

  return (
    <>
      <Head>
        <title>予約確認フォーム</title>
      </Head>
      <Layout>
        <main>
          <div className={styles.flex}>
            <h1 className={styles.bookingC_title}>
              {loginName}さん、こんにちは！
            </h1>
            <h2 className={styles.status}>現在のステータス</h2>
            <Image src={okastatus} width={110} height={90} alt="画像"></Image>
          </div>
          <h3>
            現在のOkaPointは<div className={styles.point}>{point}</div>
            ポイントです。
          </h3>
          <h2 className={styles.bookingC_message}>ご予約内容</h2>
          {data.length ? (
            <p className={styles.bookingC_ok}>
              現在ご予約いただいているツアーの確認が可能です。
            </p>
          ) : (
            <p className={styles.bookingC_error}>
              お客様が予約されているツアーはありません。
            </p>
          )}
          {data.length ? (
            <p className={styles.dpn}></p>
          ) : (
            <Link href="/tour">
              <div className={styles.bookingC_btn}>
                <button className={styles.bookingC_btn_search}>
                  ツアーを探す
                </button>
              </div>
            </Link>
          )}
          {data.map((d: Order, index) => {
            return (
              <div key={index} className={styles.bookings}>
                <h4 className={styles.booking_id}>予約番号: {d.rsNumber}</h4>
                {d.tours.map((tour) => {
                  return (
                    <div key={tour.id} className={styles.booking_flex}>
                      <div className={styles.booking_image}>
                        <Image src={tour.img1} layout="fill" alt="画像" />
                      </div>

                      <div className={styles.list}>
                        <div className={styles.booking_items}>
                          {tour.tourName}
                        </div>
                        <div>日程：{tour.tourDate}</div>
                        <div>開始時刻：{tour.startTime}時</div>
                        <div>人数：{tour.numberOfPeople}人</div>
                        <div>合計価格：{tour.total.toLocaleString()}円</div>
                      </div>

                      <div className={styles.user_comment}>
                        <Link href={`/tour/comment/${tour.id}`}>
                          <button className={styles.user_comment_btn}>
                            クチコミ
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </main>
      </Layout>
    </>
  );
}
