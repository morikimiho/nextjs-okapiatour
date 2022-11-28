import styles from "../..//styles/search-page.module.scss";
import { useState } from "react";


//　海外→アジアを選んだ場合
export const AsiaCountry = () => {
    const [country, setCountery] = useState("韓国");
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
              <option>韓国</option>
              <option>インドネシア</option>
            </select>
          </div>
          <div className={styles.serchdetail}>
            {"韓国" === country && <Korea />}
            {"インドネシア" === country && <Indonesia />}
          </div>
        </div>
      </>
    );
  };

  const Korea = () => {
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
              <option>ソウル</option>
              <option>釜山</option>
            </select>
          </div>
       
        </div>
      </>
    );
  };

  const Indonesia = () => {
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
              <option>バリ島</option>
            </select>
          </div>
       
        </div>
      </>
    );
  };
  
