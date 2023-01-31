import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../utils/supabaseClient'
// クッキー付与
export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dto = {
    mailAddress: req.body['mailAddress'],
    password: req.body['password'],
  }
  const mailAddress = req.body['mailAddress']
  const password = req.body['password']

  // const { data, error } = await supabase
  // .from("users")
  // .select("*")
  // .eq("mailAddress", mailAddress)
  // .eq("password", password)

  // const { data } = await axios.get(`http://localhost:3003/user/getuserinfo`)
  const { data } = await axios.post('http://localhost:3003/user/login', dto)
  // const { data } = await fetch(`http://localhost:3003/user/getuserinfo?mailAddress=${mailAddress}&password=${password}`);
  const user = data[0]
  console.log('user', user)
  const id = user.id
  const name = encodeURI(user.lastName) // 日本語がクッキーに入らないので(?)エンコード

  res.setHeader('Set-Cookie', [
    `userOkapiaTour={"id":${id},"name":"${name}"}; max-age=86400; path=/`,
  ])
  res.status(200).json(user)
}

/*
cookie idea
document.cookie='user={"id":111, "name":"太郎"}'        name: user value: {"id":111, "name":"太郎"}
const user = JSON.parse(document.cookie.split('=')[1])
user;
*/

// 取得　メアドとパスを持った　ID

// dbjson
// const response = await fetch(`http://localhost:8000/users?mailAddress=${mailAddress}&password=${password}`);
// const data = await response.json();
// const user = data[0];
// const id = user.id
