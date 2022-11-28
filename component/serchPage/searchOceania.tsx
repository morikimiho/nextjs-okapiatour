import styles from "../..//styles/search-page.module.scss";
import { useState } from "react";

//海外→オセアニアを選んだ場合
export const Oceania = () => {
  const [country, setCountery] = useState("オーストラリア");
  const changeHandler = (e) => {
    setCountery(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">国</label>
          </div>
          <select name="" id="" onChange={changeHandler}>
            <option>オーストラリア</option>
          </select>
        </div>
        <div className={styles.serchdetail}>
            {"オーストラリア" === country && <Australia />}
        </div>
      </div>
    </>
  );
};

const Australia = () => {
  const [city, setCity] = useState("シドニー");
  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">国</label>
          </div>
          <select name="" id="" onChange={changeHandler}>
            <option>シドニー</option>
            <option>ケアンズ</option>
          </select>
        </div>
     
      </div>
    </>
  );
};
