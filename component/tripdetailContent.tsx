import styles from "../styles/tripdetail.module.css";



export function TripdetailContent({tour}) {
  return (
    <div>
      <div className={styles.tripcontent}>
        <h2>含まれるもの</h2>
        <ul>
          <li>{tour.content1}</li>
          <li>{tour.content2}</li>
          <li>{tour.content3}</li>
        </ul>
      </div>
    </div>
  );
}
