import Link from "next/link";
import style from "../styles/info.module.css"
import { Info } from "../types/types";



export function Infomation ({data}:{data:Info[]}) {
    const slicedata = data.slice(data.length-3, data.length);
    const reverseData = slicedata.reverse();
    return (
        <>
            {/* <div className={style.infotitle}>お知らせ</div> */}
            <div className={style.infowrapper}>      
                {reverseData.map((info)=> {
                    return (
                        <div>
                            <div className={style.flexbox}>
                                <div className={style.infodate}>{info.date}</div>
                                <div className={style.infotopic}>{info.topic}</div>
                                <div className={style.infocont} style={{fontWeight: info.bold ? "bold" : "normal"}}><Link href={info.src}>{info.content}</Link></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );

} 
