import Layout from "../../component/layout";
import Image from "next/image";
import styles from "../../styles/contact.module.css";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import Router from "next/router";
import Link from "next/link";

export default function Contact() {
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  

  const onSubmit = async(e) => {
    e.preventDefault();
    if (!question) {
      setError(true);
      setErrorMessage("質問を入力してください");
    } else if (!description) {
      setError(true);
      setErrorMessage("質問の詳細を入力してください。");
    }else{
        await supabase.from("contact").insert({
         question:question,
         description:description
          })
          await Router.push("/tour");
    }
  };



  return (
    <>
      <Layout>
        <h1>お問合せ</h1>
        <div className={styles.flex}>
          <div>
            <form onSubmit={onSubmit}>
              <label>
                質問
                <br />
                <textarea
                  cols={50}
                  rows={2}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </label>
              <br />
              <label>
                詳細
                <br />
                <textarea
                  cols={100}
                  rows={10}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </label>
              <br />
              <button>送信</button>
              
            </form>
          </div>
          <div>
          <span
                className={styles.error_message}
                style={{ display: error ? "block" : "none" }}
              >
                {errorMessage}
              </span>
            <Image
              src={"/images/horse.png"}
              width={200}
              height={200}
              alt={"画像"}
              className={`${styles.keyframe0} ${styles.animation}`}
              priority
            ></Image>
          </div>
         
        </div>
        <Link rel="stylesheet" href="/tour/questionhistory">
            <h2 className={styles.questionhistory}>よくある質問はこちら</h2>
        </Link>
      </Layout>
    </>
  );
}
