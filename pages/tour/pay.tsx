import styles from '../../styles/pay.module.css'
import useCookie from '../../hooks/useCookie'
import { use, useEffect, useState } from 'react'
import Layout from '../../component/layout'
import Head from 'next/head'
import Image from 'next/image'
import { Cart, Tour } from '../../types/types'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { init, send } from '@emailjs/browser'
import { supabase } from '../../utils/supabaseClient'
import axios from 'axios'

// メール送信時利用する環境変数定義
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID

const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json())

type Point = number

export default function Pay() {
  // const { data, error } = useSWR(`/api/supabaseCart`, fetcher)
  //ポイントが保持ポイント以上の場合のバリデーション
  const cookie = useCookie()
  const loginId = cookie.loginId
  const loginName = cookie.loginName
  const [pointcheck, setPointcheck] = useState(false)

  // const { data } = useSWR(
  //   `http://localhost:3003/tour/get/cart/${loginId}`,
  //   fetcher
  // )
  const { data } = useSWR(`/api/supabaseCart`, fetcher)
  // console.log('data', data)
  //お支払い方法未選択の場合
  const router = useRouter()
  const [error_message, setErrorMessage] = useState(false)
  const [checkPayment, setCheckPayment] = useState<boolean>(false)

  const checkPay = () => {
    setCheckPayment(!checkPayment)
  }
  const [cart, setCart] = useState<Cart>()
  const [amount, setAmount] = useState(0)
  const [point, setPoint] = useState<Point>(0)
  //使用ポイント数
  const [usepoint, setUsepoint] = useState(0)
  //インプットに入れたポイント数をカウント
  const [countpoint, setCountpoint] = useState(0)

  useEffect(() => {
    if (!data) return
    //カート
    // console.log('effect', data)
    const cartcontent = data
    if (cartcontent) {
      setCart(cartcontent)

      setAmount(
        cartcontent.tours.reduce(
          (prev: number, current: { price: number; numberOfPeople: number }) =>
            current.price * current.numberOfPeople + prev,
          0
        )
      )
    }
  }, [data])

  useEffect(() => {
    Point()
  })
  const Point = async () => {
    if (!loginId) return
    // let currentP = await supabase
    //   .from('users')
    //   .select('OkaPoint')
    //   .eq('id', loginId)
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/getuser/${loginId}`
    )
    //途中です

    let userp = data.OkaPoint
    if (!userp) return
    // console.log(userp)
    // let OkaP = userp.map((p) => {
    //   return p.OkaPoint
    // })
    // if (!OkaP) return
    setPoint(userp)
    // console.log(OkaP);
  }

  // エラーになった場合は一覧は表示できないのでここで終わり
  // if (error) return <div>failed to load</div>
  // データ取得が完了していないときはローディング画面
  if (!data) return <div>loading...</div>

  //ポイント入力するごとにstateにセット
  const changePoint = (e: any) => {
    setCountpoint(e.target.value)
    setUsepoint(e.target.value)
  }

  const decidePoint = (e: any) => {
    if (e.target.value === 'all') {
      setUsepoint(point)
      setCountpoint(0)
    } else {
      setUsepoint(countpoint)
    }
  }

  // console.log(usepoint)

  // 決済する押下時の挙動
  const onClick = async () => {
    if (loginId.length === 0) {
      return
    }

    //ポイントバリデーション
    if (usepoint > point) {
      setPointcheck(true)
      return
    }

    //お支払い方法が未選択の場合
    if (checkPayment === false) {
      setErrorMessage(true)
      return
    }
    const randomstring = require('randomstring')
    const rsNumber =
      'OkapiaTour' +
      randomstring.generate({
        length: 12,
        charset: 'alphabetic123456890',
      })

    //cartの中身を取得し、ordersへ格納する。
    // const { data } = await supabase
    //   .from('inCarts')
    //   .select('*')
    //   .eq('userId', loginId)

    const { data } = await axios.get(
      `http://localhost:3003/tour/get/cart/${loginId}`
    )
    if (!data) return
    const cart = data

    const dto = {
      tours: cart.tours,
      userId: cart.userId,
      rsNumber: rsNumber,
    }
    // await supabase.from('orders').insert({
    //   tours: cart.tours,
    //   userId: cart.userId,
    //   rsNumber: rsNumber,
    // })

    await axios.post(`http://localhost:3003/order/post/addorder`, dto)

    //ツアーの加算ポイント
    let touramount = Math.floor((amount - usepoint) / 100)

    let total = point + touramount - usepoint
    await axios.patch(`http://localhost:3003/user/updatepoint/${loginId}`, {
      OkaPoint: total,
    })
    //合計ポイントをデータに保存
    // await supabase.from('users').update({ OkaPoint: Total }).eq('id', loginId)

    // await fetch(`/api/inCarts?userId=${loginId}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const cart = data[0];

    //     fetch("/api/orders", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         tours: cart.tours,
    //         userId: cart.userId,
    //         rsNumber: rsNumber,
    //       }),
    //     });
    //   });

    //cartを空にする
    // await supabase.from('inCarts').update({ tours: [] }).eq('userId', loginId)

    await axios.patch(`http://localhost:3003/order/updatecart/${loginId}`, [])

    // if (cart) {
    //   fetch(`/api/inCarts/${cart?.id}`, {
    //     method: "PATCH",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ tours: [] }),
    //   });
    // }

    // メール送信の内容を抽出
    // const uni = data[0]
    // const tako = uni.tours
    // const kani = tako[0]

    // 予約確認メールを送る
    // if (publicKey && serviceId && templateId) {
    //   init(publicKey) // publicKey初期化
    //   const params = {
    //     to_name: loginName,
    //     to_tourName: kani.tourName,
    //     to_tourDate: kani.tourDate,
    //     to_tourTime: kani.startTime,
    //     to_tourNum: rsNumber,
    //   } // 送信内容
    //   try {
    //     await send(serviceId, templateId, params)
    //     console.log('成功')
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    router.push('/tour/booking_done')
  }
  return (
    <>
      <Head>
        <title>お支払いページ</title>
      </Head>
      <Layout>
        <div className={styles.width}>
          <h3 className={styles.title}>お支払いの内容を確認してください。</h3>
          <div className={styles.total}>
            {cart &&
              cart.tours.map((tour: Tour) => {
                return (
                  <div key={tour.id}>
                    <h3>{tour.tourName}</h3>
                    <div className={styles.flex}>
                      <div>
                        <Image
                          src={tour.img1}
                          alt="画像"
                          width={150}
                          height={100}
                        ></Image>
                      </div>
                      <div>
                        <ul className={styles.list}>
                          <li>日程：{tour.tourDate}</li>
                          <li>人数：{tour.numberOfPeople}人</li>
                          <li>小計：{tour.total.toLocaleString()}円</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            <div>
              <h3>OkaPoint:{point}ポイント</h3>
              <label htmlFor="">
                <div>
                  <input
                    type="radio"
                    value="all"
                    name="howpoint"
                    onChange={decidePoint}
                  />
                  今回の注文で利用可能なポイントをすべて利用する:{point}円分
                </div>
                <div>
                  <input
                    type="radio"
                    value="partial"
                    name="howpoint"
                    onChange={decidePoint}
                  />
                  一部のポイントを使用する：
                  <input
                    type="number"
                    value={countpoint}
                    size={4}
                    onChange={changePoint}
                  />
                  {pointcheck ? (
                    <p className={styles.pointcheck}>
                      {point}ポイント以内で入力してください
                    </p>
                  ) : (
                    ''
                  )}
                </div>
              </label>
              <h2>合計:{(amount - usepoint).toLocaleString()}円</h2>
              <h3>
                加算OkaPonint:{Math.floor((amount - usepoint) / 100)}ポイント
              </h3>
            </div>
          </div>
          <h3 className={styles.title}>
            下記からお支払いの方法を選択してください。
          </h3>
          <div className={styles.input}>
            <span style={{ display: error_message ? 'block' : 'none' }}>
              <div className={styles.error_message}>
                *お支払い方法を選択してください。*
              </div>
            </span>
            <form>
              <div className={styles.radio}>
                <input
                  type="radio"
                  id="01"
                  name="pay"
                  value="credit"
                  onChange={() => checkPay()}
                />
                クレジットカード
              </div>
              <br />
              <div className={styles.radio}>
                <input
                  type="radio"
                  id="02"
                  name="pay"
                  value="bank"
                  onChange={() => checkPay()}
                />
                銀行振込
              </div>
              <br />
              <div className={styles.radio}>
                <input
                  type="radio"
                  id="03"
                  name="pay"
                  value="convenience"
                  onChange={() => checkPay()}
                />
                コンビニ支払い
              </div>

              <button type="button" className={styles.button} onClick={onClick}>
                決済する
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}
