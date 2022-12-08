import styles from "../../styles/login.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../component/layout";

export default function Login() {
  const router = useRouter();
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const data = {
    mailAddress: mailAddress,
    password: password,
  };

  //ログイン処理（CookieにsignedIn=trueとする）
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        console.log(response);
        response.json();
        if (response.status !== 200) {
          console.log("失敗");
          setError(true);
        } else if (response.status === 200) {
          const localTourJSON = localStorage.getItem("tours");
          if (localTourJSON === null) {
            router.push("/tour");
            console.log("peyに遷移");
          } else {
            router.push("/tour/pay");
            console.log("トップページに遷移");
          }

          //ここからログインしたidにローカルデータを紐付けるコードを記載
          const response = fetch(
            `/api/users?mailAddress=${mailAddress}&password=${password}`
          );
          const userdata = await (await response).json();
          const user = userdata[0];
          console.log(user);
          const id = user.id;
          console.log(id);

          const localtours = JSON.parse(
            localStorage.getItem("tours") ?? '{"tours:[]}'
          );

          if (localtours.tours.length === 0) {
            return;
          }
          fetch(`/api/inCarts/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ tours: localtours.tours }),
          });
          localStorage.clear();
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
      <Layout>
        <div className={styles.container}>
          <h3 className={styles.title}>下記からログインしてください。</h3>
          <div className={styles.inner_border}>
            <form onSubmit={handleSubmit} className={styles.input_form}>
              <div>
                <span
                  className={styles.error_message}
                  style={{ display: error ? "block" : "none" }}
                >
                  *入力に誤りがあります。*
                </span>
                <div>
                  <label htmlFor="mailAddress">メールアドレス</label>
                  <div>
                    <input
                      className={styles.input_name}
                      id="mailAddress"
                      type="email"
                      name="mailAddress"
                      onChange={(e) => setMailAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password">パスワード</label>
                  <div>
                    <input
                      className={styles.input_name}
                      id="password"
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.login_button}>
                  <button className={styles.button}>ログイン</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* container */}
        <Link href="create-user">
          <button type="button" className={styles.reg_button}>
            新規登録はこちら
          </button>
        </Link>
      </Layout>
    </>
  );
}
