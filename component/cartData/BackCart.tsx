import { useEffect, useState } from "react";
import useSWR from "swr";
import {CartItems} from "../cartData/CartItems";



export function BackCart({loginId}) {
    const fetcher = (resource: any, init: any) =>
    fetch(resource, init).then((res) => res.json());

    const { data, error } = useSWR(
    `/api/inCarts?userId=${loginId}`,
    fetcher
    );
    const [amount, setAmount] = useState(0);
    const [tours, setTours] = useState([]);
    console.log("tours", tours);

    useEffect(() => {
    if (!data) return;
    const cart = data[0];
    setTours(cart.tours);
    // console.log(tours.tours);

        setAmount(
            cart.tours.reduce(
            (prev: number, current: { price: number; numberOfPeople: number }) =>
                current.price * current.numberOfPeople + prev,
            0
            )
        );
    }, [loginId]);
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
    }
    
  return (
    <CartItems tours={tours} setAmount={setAmount} deleteHandler={deleteHandler} amount={amount} />
  );
}
