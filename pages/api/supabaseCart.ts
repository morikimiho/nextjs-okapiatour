import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

// import { supabase } from "../../utils/supabaseClient";

const getAirportAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const Req = JSON.parse(req.cookies.userOkapiaTour as string)
  const Id = Req.id
  //   console.log(Req)
  //   const { data, error } = await supabase
  //     .from("inCarts")
  //     .select("tours")
  //     .eq("userId", Id);
  const { data } = await axios.get(`http://localhost:3003/tour/get/cart/${Id}`)
  console.log('apicart', data)
  // 401 Unauthorized、認証が必要
  //   if (error) return res.status(401).json({ error: error.message })
  // 200番台は、処理が成功して正常にレスポンスができている状態
  return res.status(200).json(data)
}

export default getAirportAPI
