// スパベーステスト



import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const Form = () => {
  const [name, setTitle] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    // names テーブルのname にデータが追加される
    await supabase.from("names").insert({ name });  
    setTitle();
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>送信</button>
    </form>
  );
};
export default Form;
