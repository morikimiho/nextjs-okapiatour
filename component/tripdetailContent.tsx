import styles from "../styles/tripdetail.module.css";
import { Tour } from "../types/types";

type Props = {
  tour:Tour;
}

export function TripdetailContent({tour}:Props) {
  return (
    <div className={styles.tripcontent}>
      <div>
        <h2>含まれるもの</h2>
        <ul className={styles.detail_list}>
          <li>{tour.content1}</li>
          <li>{tour.content2}</li>
          <li>{tour.content3}</li>
        </ul>
      </div>
    </div>
  );
}
