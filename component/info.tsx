import Link from 'next/link'
import style from '../styles/info.module.css'
import { Info } from '../types/types'

export function Infomation({ info }: { info: Info[] }) {
  const slicedata = info.slice(info.length - 3, info.length)
  const reverseData = slicedata.reverse()
  return (
    <>
      {/* <div className={style.infotitle}>お知らせ</div> */}
      <div className={style.infowrapper}>
        {reverseData.map((info) => {
          return (
            <ul className={style.flexbox} key={info.id}>
              <li className={style.infodate}>{info.date}</li>
              <li className={style.infotopic}>{info.topic}</li>
              <li
                className={style.infocont}
                style={{ fontWeight: info.bold ? 'bold' : 'normal' }}
              >
                <Link href={info.src}>{info.content}</Link>
              </li>
            </ul>
          )
        })}
      </div>
    </>
  )
}
