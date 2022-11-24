import styles from "../styles/tripdetail.module.css";
import React,{useState} from "react";

export function TripdetailCount() {
  const [count, setCount] = useState(1);
  const clickAdd = () => {
    const nextcount = count + 1;
    setCount(nextcount);
  };

  const clickSubtract = () => {
    const nextcount = count - 1;
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
