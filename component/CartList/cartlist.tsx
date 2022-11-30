import Image from "next/image";
import { CartdetailCount } from "../../component/CartList/cartdetailCount";
import { useState } from "react";

export const Cartlist = ({cart}) => {
const [num, setNum] = useState(cart.numberOfPeople);
return (
<div key={cart.id}>
<p>{cart.tourDate}</p>
<Image
 src={cart.img1}
 width={150}
 height={100}
 alt="ツアー画像"
/>
<p>{cart.tourName}</p>
<p>{cart.description}</p>
<p>{cart.price}</p>
<CartdetailCount nop={setNum} num={num} />
<button onClick={() => console.log("removed!")}>削除</button>
</div>
)
}