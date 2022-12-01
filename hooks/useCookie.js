/*
How to Use ?

- インポートする
import  useCookie  from "../hooks/useCookie";

- 関数コンポーネントで定義
const cookie = useCookie();

- データ取得
const loginId = cookie.loginId;      // ログインしているユーザーのdata/db/users/id 
const loginName = cookie.loginName;  // ログインしているユーザーのdata/db/users/firstName
*/

import { useState, useEffect } from "react";

// クッキーにセットされている名前をログイン名として表示
const useCookie = () => {
  // クッキーにセットされている名前をログイン名として表示
  const [loginId, setLoginId] = useState("");
  const [loginName, setLoginName] = useState("");

  useEffect(() => {
    const cookies = document.cookie;
    if (!cookies) {
    } else {
      const cookiesArray = cookies.split(";");
      // console.log(cookiesArray)  // (2) ['uni={"id":56,"name":"%E6%9%87%8E"}', ' user={"id":3,"name":"%E6%9C%AC%E7%94%B0"}']
      const cookie = cookiesArray.filter(function (cookie) {
        return cookie.includes("userOkapiaTour");
      });
      // console.log(cookie);  // [' user={"id":3,"name":"%E6%9C%AC%E7%94%B0"}']
      const cookieName = cookie[0]; // 配列から取り出す
      // console.log(cookieName);  //  user={"id":3,"name":"%E6%9C%AC%E7%94%B0"}
      try {
        const users = JSON.parse(cookieName.split("=")[1]);
        console.log(users);
        setLoginId(users.id);
        setLoginName(decodeURI(users.name));
      } catch {
        console.log("cookie_is_undefined");
      }
    }
  });
  return { loginId, loginName };
};
export default useCookie;

// case2
// const useCookie = () => {
//   // クッキーにセットされている名前をログイン名として表示
//   const [loginId, setLoginId] = useState("");
//   const [loginName, setLoginName] = useState("");
//   useEffect(() => {
//       try {
//         if (document.cookie.indexOf('=') === 1 ) {
//             const users = JSON.parse(document.cookie.split("=")[1]);
//             console.log(users);
//             setLoginId(users.id);
//             setLoginName(decodeURI(users.name));
//         } else {
//             const users = document.cookie;
//             const splits = users.split(";");
//             console.log(splits)
//         }
//       }
//       catch {
//         console.log('cookie_is_undefined');
//       }
//       // }
// });
//     return {loginId, loginName}
// }
// export default useCookie;

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
