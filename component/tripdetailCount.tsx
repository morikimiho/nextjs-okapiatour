import styles from "../styles/tripdetail.module.css";
import React, { useState } from "react";

export function TripdetailCount({trip}) {
  const [count, setCount] = useState(trip.minPeople);
  const clickAdd = () => {
    const nextcount = count + 1;
    if (count > 9) {
      return;
    }
    setCount(nextcount);
  };

  const clickSubtract = () => {
    const nextcount = count - 1;
    if(count<trip.minPeople+1){
        return;
    }
    setCount(nextcount);
  };

  return (
    <div>
      <p>参加人数を選択してください</p>
      <div className={styles.count}>
        <button type="button" onClick={clickSubtract}>
          -
        </button>
        {count}
        <button type="button" onClick={clickAdd}>
          +
        </button>
      </div>
    </div>
  );
}
