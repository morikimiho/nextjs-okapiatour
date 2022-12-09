import useSWR from "swr";
import { Dispatch, SetStateAction, useEffect, useReducer, useState } from "react";
import { CartItems } from "./CartItems";
import { Tour } from "../../types/types";
import {useRouter} from "next/router";

type Props = {
    loginId: string;
    amount:number;
    setAmount:Dispatch<SetStateAction<number>>;
};
const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json());

export function BackCart({loginId, amount, setAmount}:Props) {
  const router=useRouter();

  const { data, error } = useSWR(
    `/api/inCarts?userId=${loginId}`,
    fetcher
  );
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    if (!data) return;
    const cart = data[0];
    setTours(cart.tours);
    // console.log(tours);

    setAmount(
      cart.tours.reduce(
        (prev: number, current: { price: number; numberOfPeople: number }) =>
          current.price * current.numberOfPeople + prev,
        0
      )
    );
  }, [data]);
    // エラーになった場合は一覧は表示できないのでここで終わり
    if (error) return <div>failed to load</div>;
    // データ取得が完了していないときはローディング画面
    if (!data) return <div>loading...</div>;
    const cart=data[0];

  const deleteHandler = (val: number) => {
    const newTours = tours.filter((tour) => tour.id != val);
      
      // console.log("yo",logid);
      fetch(`/api/inCarts/${cart.id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tours: newTours }),
      });
    setTours(newTours);
    
    

  };

  return (
    <>
     <CartItems tours={tours} amount={amount} setAmount={setAmount} deleteHandler={deleteHandler} loginId={loginId}/>
    </>
  );
}
