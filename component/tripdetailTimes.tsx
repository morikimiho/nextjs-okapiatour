
export function TripdetailTimes({tour, setTourDate, setStartTime}){

    return (
        <div>
         
            <p>希望の日付を選択してください</p>
              <input type="date" onChange ={(e) => setTourDate(e.target.value)}/>
                       
            <div>
              <p>希望の時間帯を選択してください</p>

              <div>
                {tour.times >= 7 && (
                  <select onChange={(e) => setStartTime(Number(e.target.value))}>
                    <option value="">---</option>
                    <option value="9">9:00</option>
                    <option value="10">10:00</option>
                  </select>
                )}

                {tour.times < 7 && tour.times >= 3 && (
                  <select onChange={(e) => setStartTime(Number(e.target.value))}>
                    <option value="">---</option>
                    <option value="9">9:00</option>
                    <option value="10">10:00</option>
                    <option value="11">11:00</option>
                    <option value="12">12:00</option>
                    <option value="13">13:00</option>
                  </select>
                )}

                {tour.times < 3 && (
                  <select onChange={(e) => setStartTime(Number(e.target.value))}>
                    <option value="">---</option>
                    <option value="9">9:00</option>
                    <option value="10">10:00</option>
                    <option value="11">11:00</option>
                    <option value="12">12:00</option>
                    <option value="13">13:00</option>
                    <option value="14">14:00</option>
                    <option value="15">15:00</option>
                    <option value="16">16:00</option>
                    <option value="17">17:00</option>
                    <option value="18">18:00</option>
                  </select>
                )}
              </div>
            </div>
      </div>
    )
}
