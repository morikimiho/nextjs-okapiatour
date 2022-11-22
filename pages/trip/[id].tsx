import Head from "next/head";
import { GetStaticPaths,GetStaticProps } from "next";
import { getActiveTrips,getTrip } from "../../service/trip";
import Image from "next/image";


export const getStaticPaths:GetStaticPaths=async()=>{
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


export default function Tripdetai({trip}) {
  return(
  <>
    <Head>
      <title>{trip.tourName}</title>
    </Head>
    <p>{trip.area}</p>
    <h1>パリ発：モン サン ミシェル 1日ツアー </h1>
    <Image src={trip.img1} alt="モンサンミッシェルの画像" width={220} height={150} />
    <Image src={trip.img2} alt="モンサンミッシェルの画像" width={220} height={150} />
    <Image src={trip.img3} alt="モンサンミッシェルの画像" width={220} height={150} />
   <p>{trip.description}</p>
   <h2>アクティビティ概要</h2>
   <div>
    <ul>
      <li>無料キャンセル</li>
      <li></li>
      <li></li>
    </ul>
   </div>
  
  </>
  )
  
}
