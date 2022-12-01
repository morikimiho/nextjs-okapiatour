import Image from "next/image";
import { CartdetailCount } from "../../component/CartList/cartdetailCount";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  cart: any;
  setAmount: Dispatch<SetStateAction<number>>;
};

export const Cartlist = ({ cart,setAmount }:Props) => {
  const [num, setNum] = useState(cart.numberOfPeople);
  const router = useRouter();
  function deleteTask(e: any) {
    const id = e.target.id;
    console.log(id);
    fetch(`http://localhost:8000/inCart/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(router.reload() as any);
  };
  
  const HandleNumChange = (e: { target: { value: any; }; }) => {
    const newNum = e.target.value;
    setNum(newNum);
    setAmount((prev: number) => prev - cart.price * num + cart.price * newNum);
  }

  return (
    <div key={cart.id}>
      <p>日程：{cart.tourDate}</p>
      <p>開始時間：{cart.startTime}時</p>
      <Image src={cart.img1} width={150} height={100} alt="ツアー画像" />
      <p>{cart.tourName}</p>
      <p>概要：{cart.description}</p>
      <p>価格：{cart.price}円</p>
      <CartdetailCount  num={num}  HandleNumChange={HandleNumChange}/>
      <input
        id={`${cart.id}`}
        type="submit"
        value="削除"
        onClick={deleteTask}
      />
      <p>小計：{cart.price * num}円</p>
    </div>
  );
};
