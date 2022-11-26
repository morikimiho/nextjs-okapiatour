import { useState } from "react";
import styles from "../..//styles/search-page.module.scss";


//海外→ヨーロッパを選んだ場合
export const EuropeCountry = () => {
    const [country, setCountery] = useState("フランス");
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
              <option>フランス</option>
              <option>イタリア</option>
            </select>
          </div>
          <div className={styles.serchdetail}>
            {"フランス" === country && <France />}
            {"イタリア" === country && <Italy />}
          </div>
        </div>
      </>
    );
  };

//海外→ヨーロッパ→フランスを選んだ場合
const France = () => {
 return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">都市</label>
          </div>
          <select name="" id="">
            <option>パリ</option>
          </select>
        </div>
      </div>
    </>
  );
};

//海外→ヨーロッパ→フランスを選んだ場合
const Italy = () => {
  return (
     <>
       <div className={styles.flex}>
         <div>
           <div>
             <label htmlFor="">都市</label>
           </div>
           <select name="" id="">
             <option>ミラノ</option>
             <option>ヴェネチア</option>
           </select>
         </div>
       </div>
     </>
   );
 };
