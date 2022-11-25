

export function TripdetailTimes({trip}){
    return (
        <div>
            <div>
                <p>希望の日付を選択してください</p>
                <input type="date" />
              </div>
              <div>
                <p>希望の時間帯を選択してください</p>

                <div>
                  {trip.times >= 7 && (
                    <select>
                      <option value="1">9:00</option>
                      <option value="2">10:00</option>
                    </select>
                  )}

                  {trip.times < 7 && trip.times >= 3 && (
                    <select>
                      <option value="1">9:00</option>
                      <option value="2">10:00</option>
                      <option value="3">11:00</option>
                      <option value="4">12:00</option>
                      <option value="5">13:00</option>
                    </select>
                  )}

                  {trip.times < 3 && (
                    <select name="" id="">
                      <option value="1">9:00</option>
                      <option value="2">10:00</option>
                      <option value="3">11:00</option>
                      <option value="4">12:00</option>
                      <option value="5">13:00</option>
                      <option value="6">14:00</option>
                      <option value="7">15:00</option>
                      <option value="8">16:00</option>
                      <option value="9">17:00</option>
                      <option value="10">18:00</option>
                    </select>
                  )}
                </div>
              </div>
        </div>
    )
}
