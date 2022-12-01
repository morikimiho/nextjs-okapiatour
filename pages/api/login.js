
// クッキー付与
export default async function Handler(req, res) {
    const mailAddress = req.body["mailAddress"];
    const password = req.body["password"];
    const response = await fetch(`http://localhost:8000/users?mailAddress=${mailAddress}&password=${password}`);
    const data = await response.json();
    const user = data[0];
    const id = user.id
    const name = encodeURI(user.firstName);  // 日本語がクッキーに入らないので(?)エンコード
    // console.log(name);
    res.setHeader('Set-Cookie', [
        `userOkapiaTour={"id":${id},"name":"${name}"}; max-age=86400; path=/`
    ]);
    res.status(200).json(user)
}

/*
cookie idea
document.cookie='user={"id":111, "name":"太郎"}'        name: user value: {"id":111, "name":"太郎"}
const user = JSON.parse(document.cookie.split('=')[1])
user;
*/
