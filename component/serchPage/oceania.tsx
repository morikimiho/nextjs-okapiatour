import styles from "../../styles/scss/search-page.module.scss";
import { City, Country } from "../../types/types";

//海外→オセアニアを選んだ場合
export const OceCountry = ({
  onCountryChanege,
  country,
}: {
  onCountryChanege: Function;
  country: Country;
}) => {
  const changeHandler = (e: { target: { value: any } }) => {
    onCountryChanege(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">国</label>
          </div>
          <select
            className={styles.search_input}
            value={country}
            name=""
            id=""
            onChange={changeHandler}
          >
            <option value="">-</option>
            <option value="aus">オーストラリア</option>
            <option value="micro">ミクロネシア連邦</option>

          </select>
        </div>
        <div className={styles.serchdetail}></div>
      </div>
    </>
  );
};

//海外→オセアニア→オーストラリアを選んだ場合
export const Australia = ({
  city,
  setCity,
}: {
  city: City;
  setCity: Function;
}) => {
  const changeHandler = (e: { target: { value: any } }) => {
    setCity(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">都市</label>
          </div>
          <select
            className={styles.search_input}
            value={city}
            name=""
            id=""
            onChange={changeHandler}
          >
            <option value="">-</option>
            <option value="cairns">ケアンズ</option>
            <option value="gold">ゴールドコースト</option>
          </select>
        </div>
      </div>
    </>
  );
};

//海外→オセアニア→ミクロネシア連邦を選んだ場合
export const Micronesia = ({
  setCity,
  city,
}: {
  city: City;
  setCity: Function;
}) => {
  const changeHandler = (e: { target: { value: any } }) => {
    setCity(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">都市</label>
          </div>
          <select
            className={styles.search_input}
            value={city}
            name=""
            id=""
            onChange={changeHandler}
          >
            <option value="">-</option>
            <option value="jeep">ジープ島</option>
          </select>
        </div>
      </div>
    </>
  );
};
