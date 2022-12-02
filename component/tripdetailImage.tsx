import Image from "next/image";
import styles from "../styles/tripdetail.module.css";

export function TripdetailImage({ tour }) {
  return (
    <div className={styles.tour_detail_images}>

      <div>
        <Image src={tour.img1} alt={tour.tourName} width={586} height={400} />
      </div>

      <div className={styles.tour_detail_image}>
        <div>
          <Image src={tour.img2} alt={tour.tourName} width={293} height={200} />
        </div>
        <div>
          <Image src={tour.img3} alt={tour.tourName} width={293} height={200} />
        </div>
      </div>

    </div>
  );
}
