import { GetStaticPaths,GetStaticProps } from "next";
import { getActiveTrips,getTrip } from "../service/trip";
import Image from "next/image";


export const getStaticPath:GetStaticPaths=async()=>{
 const trips=await getActiveTrips();
 return {
    paths: trips.map((trip) => {
      return { params: { id: trip.id.toString() } };
    }),
    fallback: 'blocking',
  };
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params || !params.id || Array.isArray(params.id)) {
      throw Error('エラー');
    }

  const id = parseInt(params.id);
  const trip = await getTrip(id);
 
  return {
    props: { trip },
    revalidate: 10,
  };
};



export const Tripdetail=({trip})=>{
  return (
 <>
<Image src={trip.img1} alt="モン・サン・ミシェルの画像" />

 
 
 </>

  )
}
 
