import styles from "../..//styles/search-page.module.scss";



//海外→ヨーロッパを選んだ場合
export const EuropeCountry = ({ setCountry,country }) => {
  const changeHandler = (e) => {
    setCountry(e.target.value);
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
            <option value="fr">フランス</option>
            <option value="ita">イタリア</option>
          </select>
        </div>
        <div className={styles.serchdetail}></div>
      </div>
    </>
  );
};

//海外→ヨーロッパ→フランスを選んだ場合
export const France = (city,setCity) => {
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
          <select value={city} name="" id="" onChange={changeHandler}>
            <option value="pari">パリ</option>
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
          <select value={city} name="" id="" onChange={changeHandler}>
            <option value="mila">ミラノ</option>
            <option value="vene">ヴェネチア</option>
          </select>
        </div>
      </div>
    </>
  );
};
