/*
How to Use ?

- インポートする
import  useCookie  from "../hooks/useCookie";

- 関数コンポーネントで定義
const cookie = useCookie();

- データ取得
console.log( cookie.loginId )　  // ログインしているユーザーのdata/db/users/id 
console.log( cookie.loginName )  // ログインしているユーザーのdata/db/users/firstName
*/


import { useState, useEffect } from "react";

// クッキーにセットされている名前をログイン名として表示
const useCookie = () => {
  // クッキーにセットされている名前をログイン名として表示
  const [loginId, setLoginId] = useState("");
  const [loginName, setLoginName] = useState("");
  useEffect(() => {
      try {
        const users = JSON.parse(document.cookie.split("=")[1]);
        // console.log(users);
        setLoginId(users.id);
        setLoginName(decodeURI(users.name));
      }
      catch {
        console.log('cookie_is_undefined');
      }
      // }
});
    return {loginId, loginName}
}
export default useCookie;





/*
  クッキーを削除するとエラーになる
  Unhandled Runtime Error
  SyntaxError: "undefined" is not valid JSON
  => try,catch で改善
  */

// 元本
// クッキーにセットされている名前をログイン名として表示
//   const [loginId, setLoginId] = useState("");
//   const [loginName, setLoginName] = useState("");
//   useEffect(() => {
//       try {
//         const users = JSON.parse(document.cookie.split("=")[1]);
//         console.log(users);
//         setLoginId(users.id);
//         setLoginName(decodeURI(users.name));
//       }
//       catch {
//         console.log('cookie_is_undefined');
//       }
//       // }
// });

// cookieが二つ以上ある想定
// ；　で分ける
// cookie key user をfilter でとってくる
// ＝　で分ける
// return setId setName
