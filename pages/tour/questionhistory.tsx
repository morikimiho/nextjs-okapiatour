import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react"
import Layout from "../../component/layout"
import { supabase } from "../../utils/supabaseClient"
import styles from "../../styles/questionhistory.module.css";
import Link from "next/link";


export default function Questionhistory() {

const[questionhistory,setQuestionhistory]=useState<any>();

    useEffect(()=>{
        question()
    })

const question=async()=>{
    const {data,error}=await supabase.from("contact").select(`question,description,answer`)
    
    setQuestionhistory(data)
    // エラーになった場合は一覧は表示できないのでここで終わり
if (error) return <div>failed to load</div>;
}




return(
    <>
    <Layout>
        <h1>よくある質問</h1>
       {questionhistory.map((qu: { question: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; answer: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; },index: Key | null | undefined)=>{
        return (
            <div className={styles.question} key={index}>
                
                <ul>
                    <li className={styles.questiontitle}>{qu.question}</li>
                    <p>{qu.description}</p>
                    <p>回答：{qu.answer}</p>
                </ul>
            </div>
        )
       })}
       <Link rel="stylesheet" href="/tour/contact">
            <h2 className={styles.questionhistory}>お問合せはこちら</h2>
        </Link>
    </Layout>
    </>
)
}
