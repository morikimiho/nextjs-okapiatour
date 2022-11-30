import { Header } from "../../component/header";
import { Footer } from "../../component/footer";
import styles from "../../styles/login.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");


  const data = {
    mailAddress: mailAddress,
    password: password,
  };

  //ログイン処理（CookieにsignedIn=trueとする）
  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        response.json();
        if (response.status !== 200) {
          console.log('失敗')
        }
        else if (response.status === 200) {
          router.push("/tour");
          console.log('ok')
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h3 className={styles.title}>下記からログインしてください。</h3>
        <div className={styles.inner_border}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                type="email"
                name="mailAddress"
                onChange={(e) => setMailAddress(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={styles.button}>ログイン</button>
          </form>
        </div>
      </div>{/* container */}

      <button type="button" className={styles.reg_button}>
        <Link href="create-user">新規登録はこちら</Link>
      </button>
      <Footer />
    </>
  );
}
