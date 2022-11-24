import Image from "next/image"

export function TripdetailImage({trip}){
    return (
        <div>
            <Image src={trip.img1} alt={trip.tourName} width={220} height={150} />
            <Image src={trip.img2} alt={trip.tourName} width={220} height={150} />
            <Image src={trip.img3} alt={trip.tourName} width={220} height={150} />
        </div>
    )
}
