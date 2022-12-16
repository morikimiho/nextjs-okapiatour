// スパベーステスト

import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

const Form = () => {
  // データ送信
  const [name, setTitle] = useState("");
  const submit = async (e: any) => {
    e.preventDefault();
    // names テーブルのname にデータが追加される
    await supabase.from("testTable").insert({ name });  // 入れたい("テーブル名")と({カラム名})
    setTitle("");
  };

  // データ取得
  // ページ読み込み時にsupabaseのデータ取得
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState<any>([]);  // データを配列で受け取る
  const getData = async () => {
    let { data, error } = await supabase.from("testTable").select("*"); // テーブル名"testTable"のデータを取得
    setData(data); // 取得したデータをステートで保持
  };
  console.log(data);

  return (
    <>
      {/* supabaseにデータを入力 */}
      <form onSubmit={submit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>送信</button>
      </form>

      {/* 取得したデータを表示 */}
      {data.map((d: { id: number; name: string; testarray: any }) => (
        <ul key={d.id}>
          <li>{d.name}</li>
          <li>{d.testarray}</li>
        </ul>
      ))}
    </>
  );
};
export default Form;
