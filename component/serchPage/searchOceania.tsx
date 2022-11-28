import styles from "../..//styles/search-page.module.scss";
import { useState } from "react";

//海外→オセアニアを選んだ場合
export const Oceania = ({setocCountry}) => {
  const [ascountry, setasCountery] = useState("オーストラリア");
  const changeHandler = (e) => {
    setocCountry(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">国</label>
          </div>
          <select name="" id="" onChange={changeHandler}>
            <option value="aus">オーストラリア</option>
          </select>
        </div>
        <div className={styles.serchdetail}>
            {"aus" === country && <Australia />}
        </div>
      </div>
    </>
  );
};

const Australia = ({setCountry}) => {
  
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
