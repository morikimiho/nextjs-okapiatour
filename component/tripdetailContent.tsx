import styles from "../styles/tripdetail.module.css";



export function TripdetailContent() {
  return (
    <div>
      <div className={styles.tripcontent}>
        <h2>含まれるもの</h2>
        <ul>
          <li>{trip.content1}</li>
          <li>{trip.content2}</li>
          <li>{trip.content3}</li>
        </ul>
      </div>
    </div>
  );
}
