
import styles from "../..//styles/search-page.module.scss";



//海外→アジアを選んだ場合
export const NorthameCountry = ({ setCountry,country }) => {
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
            <option value="uni">アメリカ</option>
            <option value="cana">カナダ</option>
          </select>
        </div>
        <div className={styles.serchdetail}></div>
      </div>
    </>
  );
};

//海外→北米→アメリカを選んだ場合
export const Uni = ({city,setCity}) => {
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
            <option value="vegas">ラスベガス</option>
            <option value="los">ロサンゼルス</option>
          </select>
        </div>
      </div>
    </>
  );
};

//海外→北米→インドネシアを選んだ場合
export const Canada= () => {
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">都市</label>
          </div>
          <select name="" id="">
            <option value='van'>バンクーバ</option>
            <option value="vic">ヴィクトリア</option>
          </select>
        </div>
      </div>
    </>
  );
};
