import styles from "../../styles/scss/search-page.module.scss";



//海外→ヨーロッパを選んだ場合
export const EuropeCountry = ({ onCountryChanege,country }) => {
  const changeHandler = (e) => {
    onCountryChanege(e.target.value)
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
            <option value="fr">フランス</option>
            <option value="ita">イタリア</option>
            <option value="sp">スペイン</option>
          </select>
        </div>
        <div className={styles.serchdetail}></div>
      </div>
    </>
  );
};

//海外→ヨーロッパ→フランスを選んだ場合
export const France = ({city,setCity}) => {
  const changeHandler=(e)=>{
    setCity(e.target.value)
  }
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">都市</label>
          </div>
          <select className={styles.search_input} value={city} name="" id="" onChange={changeHandler}>
            <option value="pari">パリ</option>
            <option value="mar">マルセイユ</option>
          </select>
        </div>
      </div>
    </>
  );
};

//海外→ヨーロッパ→フランスを選んだ場合
export const Italy = ({city,setCity}) => {
  const changeHandler=(e)=>{
    setCity(e.target.value)
  }
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">都市</label>
          </div>
          <select className={styles.search_input} value={city} name="" id="" onChange={changeHandler}>
          <option value="">-</option>
            <option value="milan">ミラノ</option>
            <option value="vene">ヴェネチア</option>
          </select>
        </div>
      </div>
    </>
  );
};

//海外→ヨーロッパ→スペインを選んだ場合
export const Spain = ({city,setCity}) => {
  const changeHandler=(e)=>{
    setCity(e.target.value)
  }
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">都市</label>
          </div>
          <select className={styles.search_input} value={city} name="" id="" onChange={changeHandler}>
          <option value="">-</option>
            <option value="bal">バルセロナ</option>
            <option value="san">サンセバスチャン</option>
          </select>
        </div>
      </div>
    </>
  );
};
