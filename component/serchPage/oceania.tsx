import styles from "../../styles/scss/search-page.module.scss";

//海外→オセアニアを選んだ場合
export const OceCountry = ({ onCountryChanege, country }) => {
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
          <select className={styles.search_input} value={country} name="" id="" onChange={changeHandler}>
            <option value="">-</option>
            <option value="aus">オーストラリア</option>
 
          </select>
        </div>
        <div className={styles.serchdetail}></div>
      </div>
    </>
  );
};

//海外→オセアニア→オーストラリアを選んだ場合
export const Australia = ({ city, setCity }) => {
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
          <select className={styles.search_input} value={city} name="" id="" onChange={changeHandler}>
            <option value="cairns">ケアンズ</option>
            <option value="gold">ゴールドコースト</option>
          </select>
        </div>
      </div>
    </>
  );
};
