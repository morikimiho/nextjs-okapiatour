import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Tour } from "../../types/types";
import { CartItems } from "../cartData/CartItems";

type Props = {
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
};

export function LocalCart({ amount, setAmount }: Props) {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    let localTourJSON = localStorage.getItem("tours");
    if (localTourJSON === null) {
      return;
    }

    const localTourData = JSON.parse(localTourJSON);

    if (!localTourData) return;

    if (tours.length === 0) {
      setTours(localTourData.tours);
    }

    setAmount(
      localTourData.tours.reduce(
        (prev: number, current: { price: number; numberOfPeople: number }) =>
          current.price * current.numberOfPeople + prev,
        0
      )
    );
  }, [tours]);

  const deleteHandler = (val: number) => {
    const newTours = tours.filter((tour) => tour.id != val);
    setTours(newTours);
    // console.log(newTours);
    localStorage.setItem("tours", JSON.stringify({tours: newTours}));
  };

  return (
    <CartItems
      tours={tours}
      setAmount={setAmount}
      deleteHandler={deleteHandler}
      amount={amount}
    />
  );
}
