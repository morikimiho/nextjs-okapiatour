import Link from "next/link";
import style from "../styles/info.module.css"
import { Info } from "../types/types";



export function Infomation ({data}:{data:Info[]}) {
    const slicedata = data.slice(data.length-3, data.length);
    const reversedArr = slicedata.reverse()
    return (
        <>
            {/* <div className={style.infotitle}>お知らせ</div> */}
            <div className={style.infowrapper}>      
                {reversedArr.map((info)=> {
                    return (
                        <div>
                            <div className={style.flexbox}>
                                <div className={style.infodate}>{info.date}</div>
                                <div className={style.infotopic}>{info.topic}</div>
                                <div className={style.infocont}><Link href={info.src}>{info.content}</Link></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );

} 
