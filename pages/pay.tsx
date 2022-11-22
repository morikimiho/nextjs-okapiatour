import styles from '../styles/pay.module.css';

export default function Pay() {

        return (
            < >
                <div className={styles.width}>
                    <div className={styles.total}>
                        <ConfirmTotal />
                    </div>
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
            <p>購入商品</p>
            <p>合計金額</p>
        </div>
    )
}

 export function InputRange() {
    return (
        <form>
            <div className={styles.radio}>
                <input type="radio" id='01'/>クレジットカード
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
                    <input type="radio" id='02'/>銀行振込
                </div>
                <br />
                <div className={styles.radio}>
                    <input type="radio" id='03'/>コンビニ支払い
                </div>

        </form>
    );
}
