import useSWR from 'swr'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CartItems } from './CartItems'
import { Tour } from '../../types/types'
// import { supabase } from '../../utils/supabaseClient'
import axios from 'axios'

type Props = {
  loginId: string
  amount: number
  setAmount: Dispatch<SetStateAction<number>>
}
const fetcher = (resource: string, init: any) =>
  fetch(resource, init).then((res) => res.json())

export function BackCart({ loginId, amount, setAmount }: Props) {
  const { data } = useSWR(
    `http://localhost:3003/tour/get/cart/${loginId}`,
    fetcher
  )
  // console.log('cartdata', data)
  const [tours, setTours] = useState<Tour[]>([])

  useEffect(() => {
    if (!data) return
    // const cart = data[0]
    setTours(data.tours)

    setAmount(
      data.tours.reduce(
        (prev: number, current: { price: number; numberOfPeople: number }) =>
          current.price * current.numberOfPeople + prev,
        0
      )
    )
  }, [data])
  // エラーになった場合は一覧は表示できないのでここで終わり
  // if (error) return <div>failed to load</div>
  // データ取得が完了していないときはローディング画面
  if (!data) return <div>loading...</div>

  const deleteHandler = async (val: number) => {
    const newTours = tours.filter((tour) => tour.id != val)
    // const { error } = await supabase
    //   .from('inCarts')
    //   .update({ tours: newTours })
    //   .eq('userId', loginId)
    await axios.patch(
      `http://localhost:3003/order/updatecart/${loginId}`,
      newTours
    )
    setTours(newTours)
  }

  return (
    <>
      <CartItems
        tours={tours}
        amount={amount}
        setAmount={setAmount}
        deleteHandler={deleteHandler}
        loginId={loginId}
      />
    </>
  )
}
