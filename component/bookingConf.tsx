import useCookie from "../hooks/useCookie";
import { supabase } from "../utils/supabaseClient";


export async function BookingConf () {
    const cookie = useCookie();
    // クッキーにセットされている名前をログイン名として表示
    const loginName = cookie.loginName;
    const loginId = cookie.loginId;
    
    const {data, error} = await supabase.from("orders").select("*").eq("userId", loginId);
    if(!data) return;
    if(error) console.log(error);
    console.log(data);

    return data;
}
