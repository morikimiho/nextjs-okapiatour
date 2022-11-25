export function TripdetailActivity({trip}) {
    return (
      <div>
        <h2>アクティビティ概要</h2>
        <ul>
          <li>無料キャンセル(ご出発日三日目まで)</li>
          <li>今すぐ予約＆後で支払う</li>
          <li>所要時間:{trip.times}時間</li>
          <li>最小催行人数:{trip.minPeople}人</li>
          <li>集合場所:{trip.meetingPlace}</li>
          <li>金額:¥{trip.price}円</li>
        </ul>
      </div>
    );
  }
