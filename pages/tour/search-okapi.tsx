import Layout from '../../component/layout'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Styles from '../../styles/okapi.module.css'
import { supabase } from '../../utils/supabaseClient'
import useCookie from '../../hooks/useCookie'
import Link from 'next/link'
import axios from 'axios'

export default function Okapi() {
  const cookie = useCookie()
  const loginId = cookie.loginId
  const [okapi, setOkapi] = useState(9)
  const [disable1, setDisable1] = useState(false)
  const [disable2, setDisable2] = useState(false)
  const [disable3, setDisable3] = useState(false)
  const [disable4, setDisable4] = useState(false)
  const [disable5, setDisable5] = useState(false)
  const [disable6, setDisable6] = useState(false)
  const [disable7, setDisable7] = useState(false)
  const [disable8, setDisable8] = useState(false)
  const [disable9, setDisable9] = useState(false)
  const [disable10, setDisable10] = useState(false)
  const [isDisplay, setIsDisplay] = useState(false)
  const okapiClick1 = () => {
    setOkapi(okapi + 1)
    setDisable1(true)
  }
  const okapiClick2 = () => {
    setOkapi(okapi + 1)
    setDisable2(true)
  }
  const okapiClick3 = () => {
    setOkapi(okapi + 1)
    setDisable3(true)
  }
  const okapiClick4 = () => {
    setOkapi(okapi + 1)
    setDisable4(true)
  }
  const okapiClick5 = () => {
    setOkapi(okapi + 1)
    setDisable5(true)
  }
  const okapiClick6 = () => {
    setOkapi(okapi + 1)
    setDisable6(true)
  }
  const okapiClick7 = () => {
    setOkapi(okapi + 1)
    setDisable7(true)
  }
  const okapiClick8 = () => {
    setOkapi(okapi + 1)
    setDisable8(true)
  }
  const okapiClick9 = () => {
    setOkapi(okapi + 1)
    setDisable9(true)
  }
  const okapiClick10 = () => {
    setOkapi(okapi + 1)
    setDisable10(true)
  }

  const cong = async () => {
    if (okapi === 10) {
      setIsDisplay(true)
      if (!loginId) return
      // let currentP = await supabase.from("users").select("OkaPoint").eq("id", loginId);
      let currentP = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/getuser/${loginId}`
      )
      // console.log('currentP', currentP)
      let userp = currentP.data.OkaPoint
      // console.log('userp', userp)

      let total = userp + 2000
      console.log('total', total)
      // await supabase.from('users').update({ OkaPoint: total }).eq('id', loginId)
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/updatepoint/${loginId}`,
        { OkaPoint: total }
      )
    }
  }

  useEffect(() => {
    cong()
  })
  return (
    <>
      <Layout>
        <div
          style={{
            display: isDisplay ? 'block' : 'none',
          }}
          className={`${Styles.keyframe0} ${Styles.animation}`}
        >
          <div className={`${Styles.cong} `}>
            <Image
              className={`${Styles.keyframe1} ${Styles.animation} ${Styles.okapi1}`}
              src="/images/horse.png"
              alt="オカピ"
              width={390}
              height={400}
              priority
            />
            <Image
              className={`${Styles.keyframe2} ${Styles.animation} ${Styles.okapi2}`}
              src="/images/horse.png"
              alt="オカピ"
              width={170}
              height={200}
              priority
            />
            <Image
              className={`${Styles.keyframe4} ${Styles.animation} ${Styles.okapi4}`}
              src="/images/horse.png"
              alt="オカピ"
              width={100}
              height={150}
              priority
            />
            <Image
              className={`${Styles.keyframe3} ${Styles.animation} ${Styles.okapi3}`}
              src="/images/horse.png"
              alt="オカピ"
              width={140}
              height={180}
              priority
            />
            <Image
              className={`${Styles.keyframe5} ${Styles.animation} ${Styles.okapi5}`}
              src="/images/horse.png"
              alt="オカピ"
              width={110}
              height={140}
              priority
            />
          </div>
          <div className={Styles.ome}>おめでとう！！！</div>
          <div className={Styles.get}>
            2000オカピポイントGet!!!
            <br />
            <Link href="/tour/booking_confirmation" legacyBehavior>
              <div className={Styles.link}>ポイントを確認する</div>
            </Link>
          </div>
        </div>

        <div>
          <h1 className={Styles.h1}>オカピを探せ</h1>
          <h2>オカピ発見数{okapi}</h2>
        </div>
        <br />
        <div className={Styles.back}>
          <button
            disabled={disable1}
            onClick={okapiClick1}
            className={Styles.okapi}
          >
            <Image
              src="/images/okapi-search/horse.png"
              width={80}
              height={50}
              alt={'オカピ'}
            ></Image>
          </button>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust6.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust6.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust6.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <button
            disabled={disable2}
            onClick={okapiClick2}
            className={Styles.okapi}
          >
            <Image
              src="/images/okapi-search/horse.png"
              width={80}
              height={50}
              alt={'オカピ'}
            ></Image>
          </button>
          <button
            disabled={disable3}
            onClick={okapiClick3}
            className={Styles.okapi}
          >
            <Image
              src="/images/okapi-search/horse.png"
              width={80}
              height={50}
              alt={'オカピ'}
            ></Image>
          </button>
          <Image
            src="/images/okapi-search/okapi-illust1.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <button
            disabled={disable4}
            onClick={okapiClick4}
            className={Styles.okapi}
          >
            <Image
              src="/images/okapi-search/horse.png"
              width={80}
              height={50}
              alt={'オカピ'}
            ></Image>
          </button>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust6.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust1.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust1.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust6.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust6.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust6.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust1.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <button
            disabled={disable5}
            onClick={okapiClick5}
            className={Styles.okapi}
          >
            <Image
              src="/images/okapi-search/horse.png"
              width={80}
              height={50}
              alt={'オカピ'}
            ></Image>
          </button>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust6.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust1.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <button
            disabled={disable6}
            onClick={okapiClick6}
            className={Styles.okapi}
          >
            <Image
              src="/images/okapi-search/horse.png"
              width={80}
              height={50}
              alt={'オカピ'}
            ></Image>
          </button>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust1.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust1.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust1.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <button
            disabled={disable7}
            onClick={okapiClick7}
            className={Styles.okapi}
          >
            <Image
              src="/images/okapi-search/horse.png"
              width={80}
              height={50}
              alt={'オカピ'}
            ></Image>
          </button>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust1.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <button
            disabled={disable8}
            onClick={okapiClick8}
            className={Styles.okapi}
          >
            <Image
              src="/images/okapi-search/horse.png"
              width={80}
              height={50}
              alt={'オカピ'}
            ></Image>
          </button>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust1.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <button
            disabled={disable9}
            onClick={okapiClick9}
            className={Styles.okapi}
          >
            <Image
              src="/images/okapi-search/horse.png"
              width={80}
              height={50}
              alt={'オカピ'}
            ></Image>
          </button>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust1.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <button
            disabled={disable10}
            onClick={okapiClick10}
            className={Styles.okapi}
          >
            <Image
              src="/images/okapi-search/horse.png"
              width={80}
              height={50}
              alt={'オカピ'}
            ></Image>
          </button>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust1.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust2.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust3.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust4.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust5.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
          <Image
            src="/images/okapi-search/okapi-illust8.png"
            width={80}
            height={50}
            alt={'オカピ'}
          ></Image>
        </div>
      </Layout>
    </>
  )
}
