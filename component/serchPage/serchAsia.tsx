import styles from "../..//styles/search-page.module.scss";

//海外→アジアを選んだ場合
export const AsiaCountry = ({ onCountryChanege, country }) => {
  const changeHandler = (e) => {
    onCountryChanege(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">国</label>
          </div>
          <select value={country} name="" id="" onChange={changeHandler}>
            <option value="">-</option>
            <option value="ko">韓国</option>
            <option value="taiwa">台湾</option>
            <option value="phi">フィリピン</option>
          </select>
        </div>
        <div className={styles.serchdetail}></div>
      </div>
    </>
  );
};

//海外→アジア→韓国を選んだ場合
export const Korea = ({ city, setCity }) => {
  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">都市</label>
          </div>
          <select value={city} name="" id="" onChange={changeHandler}>
            <option value="seoul">ソウル</option>
            <option value="busan">釜山</option>
          </select>
        </div>
      </div>
    </>
  );
};

//海外→アジア→台湾を選んだ場合
export const Taiwan = ({ setCity, city }) => {
  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">都市</label>
          </div>
          <select value={city} name="" id="" onChange={changeHandler}>
            <option>台北</option>
            <option>台中</option>
          </select>
        </div>
      </div>
    </>
  );
};

//海外→アジア→台湾を選んだ場合
export const Philippines = ({ setCity, city }) => {
  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">都市</label>
          </div>
          <select value={city} name="" id="" onChange={changeHandler}>
          <option value="">-</option>
            <option value="mani">マニラ</option>
            <option value="sebu">セブ</option>
          </select>
        </div>
      </div>
    </>
  );
};
