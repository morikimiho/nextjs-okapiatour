import { useState } from "react";
import { CartItems } from "../cartData/CartItems";

export function LocalCart() {
  let localTourJSON = localStorage.getItem("tours");
  if (localTourJSON === null) {
    return <p>カートに商品がありません</p>;
  } else {
    const localTourData = JSON.parse(localTourJSON);
    console.log("localTourData", localTourData);

    let sum = 0;
    for (let i = 0; i < localTourData.tours.length; i++) {
      sum = i + sum;
    }
    const [tours, setTours] = useState(localTourData);
    const [amount, setAmount] = useState(sum);

    return (
      <CartItems
        tours={tours}
        setAmount={undefined}
        deleteHandler={undefined}
        amount={undefined}
      />
    );
  }
}
