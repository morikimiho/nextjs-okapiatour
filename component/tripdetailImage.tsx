import Image from "next/image"

export function TripdetailImage({tour}){
    return (
        <div>
            <Image src={tour.img1} alt={tour.tourName} width={220} height={150} />
            <Image src={tour.img2} alt={tour.tourName} width={220} height={150} />
            <Image src={tour.img3} alt={tour.tourName} width={220} height={150} />
        </div>
    )
}
