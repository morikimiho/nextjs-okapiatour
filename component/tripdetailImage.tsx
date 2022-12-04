import Image from "next/image";
import styles from "../styles/tripdetail.module.css";

export function TripdetailImage({ tour }) {
  return (
    <div className={styles.tour_detail_images}>
      <div className={styles.tour_detail_images_top}>
        <Image src={tour.img1} alt={tour.tourName} layout="fill" />
      </div>

      <div className={styles.tour_detail_image}>
        <div className={styles.tour_detail_images_sub}>
          <Image src={tour.img2} alt={tour.tourName} layout="fill" />
        </div>
        <div className={styles.tour_detail_images_sub}>
          <Image src={tour.img3} alt={tour.tourName} layout="fill" />
        </div>
      </div>
    </div>
  );
}
