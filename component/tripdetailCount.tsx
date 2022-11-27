import styles from "../styles/tripdetail.module.css";
import React, { useState } from "react";

export function TripdetailCount({tour}) {
  const [count, setCount] = useState(tour.minPeople);
  const clickAdd = () => {
    const nextcount = count + 1;
    if (count > 9) {
      return;
    }
    setCount(nextcount);
  };

  const clickSubtract = () => {
    const nextcount = count - 1;
    if(count<tour.minPeople+1){
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
        &nbsp;
        {count}
        &nbsp;
        <button type="button" onClick={clickAdd}>
          +
        </button>
      </div>
    </div>
  );
}
