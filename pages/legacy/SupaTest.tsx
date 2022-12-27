// スパベーステスト

/*
supabase上でテーブルの設定が`No active RLS enabled`になっていると
取得できないので、
`RLS is not enabled`
に切り替える！
参考
https://tech-blog.rakus.co.jp/entry/20220928/vercel#Supabase%E3%81%A8%E3%81%AF
*/

import { supabase } from "../../utils/supabaseClient"; // supabaseをコンポーネントで使うときはかく
import { useState, useEffect } from "react";
import Link from "next/link";

type inputForm = {
  mailAddress: string;
  password: string;
};

const Form = () => {
  // データ送信
  const [name, setTitle] = useState("");
  const [userId, setId] = useState("");
  const tours = ["tours", 2];
  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await supabase.from("testTable").insert({ name }); // 入れたい("テーブル名")と({カラム名})
    await supabase.from("inCarts").insert({ tours, userId }); // 入れたい("テーブル名")と({カラム名})
  };

  // データ取得
  // ページ読み込み時にsupabaseのデータ取得
  // useEffect(() => {
  //   getData();
  // }, []);
  const mailAddress = "keisuke@honda.com";
  const password = "keisuke04";
  const [data, setData] = useState<any>([]); // データを配列で受け取る
  const getData = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let { data, error }: { data: any; error: any } = await supabase
      .from("users")
      .select() // テーブル名 "testTable" のデータを取得
      .eq("mailAddress", mailAddress);
    // .eq("password", password);
    setData(data); // 取得したデータをステートで保持
    const uni = data[0];
    const userId = uni.id;
    console.log(userId);
  };
  console.log(data);

  // create user
  const supaSub = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: "flamber@example.com",
      password: "examplpassword",
      options: {
        data: {
          first_name: 'John',
          last_name: 'Beck',
          age: 27,
          birth: 1996,
        }
      }
    });
    console.log(data);
  };
  // login
  const supaLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "flamber@example.com",
      password: "examplpassword",
    });
    console.log(data);
  };
  const getUser = async () => {
    // const {
    //   data: { user },
    // } = await supabase.auth.getUser();
    // console.log(user.user_metadata);

    // const { data: { session } } = await supabase.auth.getSession()
    // console.log(session);

    // const { data, error } = await supabase.auth.refreshSession();
    // const { session, user } = data;
    // console.log(data);
      
  };

  return (
    <>
      {/* supabaseにデータを入力 */}
      <form onSubmit={submit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={userId}
          onChange={(e) => setId(e.target.value)}
        />
        <button>送信</button>
      </form>

      {/* 取得したデータを表示 */}
      {data.map((d: { id: number; firstName: string; lastName: any }) => (
        <ul key={d.id}>
          <li>
            {d.firstName} {d.lastName}
          </li>
        </ul>
      ))}
      <form onSubmit={getData}>
        <button>取得</button>
      </form>

      <h3>登録フォーム</h3>
      <button onClick={supaSub}>登録</button>
      <button onClick={supaLogin}>ログイン</button>
      <button onClick={getUser}>取得</button>
    </>
  );
};
export default Form;
