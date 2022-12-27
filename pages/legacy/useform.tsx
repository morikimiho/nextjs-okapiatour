import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "../../utils/supabaseClient";

type inputForm = {
  email: string;
  pass: string;
};

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputForm>();
  const onSubmit: SubmitHandler<inputForm> = async (data, e: any) => {
    e.preventDefault();
    console.log(data)
    const mailAddress = data.email;
    const password = data.pass;
    // await supabase.from("users").insert({ mailAddress, password }); // 入れたい("テーブル名")と({カラム名})
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">めあど</label>
      <input
        id="email"
        type="text"
        {...register("email", { required: true, minLength: 4 })}
      />
      {errors.email && <div>めあど入れて</div>}
      <label htmlFor="pass">パスワ</label>
      <input
        id="pass"
        type="password"
        {...register("pass", {
          required: {
            value: true,
            message: "入力してくだ",
          },
          minLength: {
            value: 8,
            message: "8文字以上",
          },
        })}
      />
      {errors.pass?.type === "required" && (<div>パスワ入れて</div>)}
      {errors.pass?.type === "minLength" && (<div>8文字以上な</div>)}
      <button type="submit">登録</button>
    </form>
  );
};

export default App;

/*
  バリデーションメッセージ
  className={styles.error_message}
*/
