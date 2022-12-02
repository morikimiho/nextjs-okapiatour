
import useCookie from "../../hooks/useCookie";
import { BackCart } from "../../component/cartData/BackCart";
import { LocalCart } from "../../component/cartData/LocalCart";


export default function Cart() {
  const cookie = useCookie();
  const loginId = cookie.loginId;

  return (

  
    <div>{loginId ? <BackCart loginId={loginId} /> : <p>ローカルがありません。</p> }</div>

    // <LocalCart loginId={loginId}
    
    );
}
