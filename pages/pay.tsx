import styles from '../styles/pay.module.css';

export default function Pay() {

        return (
            < >
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
                クレジットカード番号
                <input type="text" />
                    <br />
                登録名
                <input type="text" />
                    <br />
                有効期限
                <input type="text" />
                    <br />
                セキュリティーコード
                <input type="text" />
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
                <a href="#">決済を完了する →</a>
            </button>
        </>
    );
}
