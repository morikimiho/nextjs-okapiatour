import { supabase } from "../utils/supabaseClient";
import style from "../styles/info.module.css"
import { Info } from "../types/types";

export function Info ({data}:{data: Info[]}) {

    return (
        <div>
            <div className={style.infotitle}>お知らせ</div>
                {data.map((info)=> {
                    return (
                        <>
                            <div className={style.infodate}>{info.date}</div>
                            <div className={style.infotopic}>{info.topic}</div>
                            <div className={style.intocont}>{info.content}</div>
                        </>
                    );
                })}
        </div>
    );
} 
