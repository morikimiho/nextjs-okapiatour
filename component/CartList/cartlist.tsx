import Image from "next/image";
import { CartdetailCount } from "../../component/CartList/cartdetailCount";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import useCookie from "../../hooks/useCookie";

type Props = {
  tour: any;
  setAmount: Dispatch<SetStateAction<number>>;
};

export const Cartlist = ({ tour,setAmount }:Props) => {
  const cookie =useCookie();
  const loginId = cookie.loginId;
  const [num, setNum] = useState(tour.numberOfPeople);
  const router = useRouter();
  

  const  DeleteData=(e)=> {
    const id=e.target.id

      fetch(`http://localhost:8000/inCarts?userId=${loginId}&tours&tourId=${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

    
    
  }

  const HandleNumChange = (e: { target: { value: any; }; }) => {
    const newNum = e.target.value;
    setNum(newNum);
    setAmount((prev: number) => prev - tour.price * num + tour.price * newNum);
  }

  return (
    <div key={tour.id}>
      <p>日程：{tour.tourDate}</p>
      <p>開始時間：{tour.startTime}時</p>
      <Image src={tour.img1} width={150} height={100} alt="ツアー画像" />
      <p>{tour.tourName}</p>
      <p>概要：{tour.description}</p>
      <p>価格：{tour.price}円</p>
      <CartdetailCount  num={num}  HandleNumChange={HandleNumChange}/>
      <input
        id={`${tour.id}`}
        type="submit"
        value="削除"
        onClick={DeleteData}
      />
      <p>小計：{tour.price * num}円</p>
    </div>
  );
};
