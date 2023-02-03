import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../utils/supabaseClient'

const getAirportAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { abroad, areaCode, countryCode, cityCode, prefecture } = req.query

  // console.log(abroad, areaCode, countryCode,cityCode,  prefecture);
  let query = supabase.from('tours').select('*')
  if (abroad) {
    if (areaCode) {
      if (countryCode) {
        if (cityCode) {
          //   query = query
          //     .eq('abroad', abroad)
          //     .eq('areaCode', areaCode)
          //     .eq('countryCode', countryCode)
          //     .eq('cityCode', cityCode)
        } else {
          query = query
            .eq('abroad', abroad)
            .eq('areaCode', areaCode)
            .eq('countryCode', countryCode)
        }
      } else {
        query = query.eq('abroad', abroad).eq('areaCode', areaCode)
      }
    } else if (prefecture) {
      query = query.eq('abroad', abroad).eq('prefecture', prefecture)
    } else {
      query = query.eq('abroad', abroad)
    }
  }

  const { data, error } = await query

  // 401 Unauthorized、認証が必要
  if (error) return res.status(401).json({ error: error.message })
  // 200番台は、処理が成功して正常にレスポンスができている状態
  return res.status(200).json(data)
}

export default getAirportAPI
