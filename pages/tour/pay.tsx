import styles from '../../styles/pay.module.css';
import {Header} from "../../component/header";
import {Footer} from "../../component/footer";

export default function Pay() {
// const[loginId,setloginId]=useCookie()
  const loginId=1;


  fetch(`http://localhost:8000/inCart?userId=${loginId}`)
  .then(response=>response.json())
  .then(deta=>{
      console.log(deta);

  })


    // fetch('http://localhost:8000/orders', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(deta),
    //   })

        return (
            < >
                <Header />
                <div className={styles.width}>
                <h3 className={styles.title}>お支払いの内容を確認してください。</h3>
                    <div className={styles.total}>
                        <ConfirmTotal />
                    </div>
                        <h3 className={styles.title}>下記からお支払いの方法を選択してください。</h3>
                    <div className={styles.input}>
                        <InputRange />
                    </div>
                </div>
                <Footer />
            </>
        );

}

export function ConfirmTotal() {
    return (
        <div>
            <p>購入商品：</p>
            <p>合計金額：</p>
        </div>
    )
}

 export function InputRange() {
 

  


    return (
        <>
            <form>
                <div className={styles.radio}>
                    <input type="radio" id='01' name='pay'/>クレジットカード
                </div>
                <br />
                <div className={styles.radio}>
                    <input type="radio" id='02' name='pay'/>銀行振込
                </div>
                <br />
                <div className={styles.radio}>
                   <input type="radio" id='03' name='pay'/>コンビニ支払い
                </div>

            </form>
            <button type='button' className={styles.button}>
                <a href="/tour/booking_done">決済する</a>
            </button>
        </>
    );
}
