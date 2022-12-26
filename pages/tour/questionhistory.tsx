import { useEffect, useState } from "react"
import Layout from "../../component/layout"
import { supabase } from "../../utils/supabaseClient"
import styles from "../../styles/questionhistory.module.css";
import Link from "next/link";

export default function Questionhistory() {

const[questionhistory,setQuestionhistory]=useState([]);

    useEffect(()=>{
        question()
    })

const question=async()=>{
    const {data,error}=await supabase.from("contact").select(`question,description,answer`)
    
    setQuestionhistory(data)
}


return(
    <>
    <Layout>
        <h1>よくある質問</h1>
       {questionhistory.map((qu,index)=>{
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
