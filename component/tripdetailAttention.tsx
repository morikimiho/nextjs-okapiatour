import styles from "../styles/tripdetail.module.css";


export function TripdetailAttention(){
return  (
    <div className={styles.attention}>
    <h3>注意事項</h3>
    <ul className={styles.detail_list}>
      <li>
        ランチは含まれておりません。(含まれるものに記載ある場合はランチ含む)
      </li>
      <li>集合場所までは各自でお越しください。</li>
      <li>所要時間は交通渋滞などにより変更する可能性がございます。</li>
      <li>
        11名以上ご予約希望の場合は別途ご連絡ください（団体割引有り）
      </li>
    </ul>
  </div>
)

}
