import Image from "next/image";
import { CartdetailCount } from "../../component/CartList/cartdetailCount";
import { useState } from "react";
import { useRouter } from "next/router";

export const Cartlist = ({ cart }) => {
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
  const [num, setNum] = useState(cart.numberOfPeople);
  return (
    <div key={cart.id}>
      <p>{cart.tourDate}</p>
      <Image src={cart.img1} width={150} height={100} alt="ツアー画像" />
      <p>{cart.tourName}</p>
      <p>{cart.description}</p>
      <p>{cart.price}</p>
      <CartdetailCount nop={setNum} num={num} />
      <input
        id={`${cart.id}`}
        type="submit"
        value="削除"
        onClick={deleteTask}
      />
    </div>
  );
};
