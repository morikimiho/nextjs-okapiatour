import styles from '../../styles/login.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../component/layout'
import { supabase } from '../../utils/supabaseClient'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

type inputForm = {
  mailAddress: string
  password: string
}

export default function Login() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputForm>()

  //ログイン処理（CookieにsignedIn=trueとする）
  const onSubmit: SubmitHandler<inputForm> = async (data, e: any) => {
    e.preventDefault()
    const dto = {
      mailAddress: data.mailAddress,
      password: data.password,
    }
    // const mailAddress = data.mailAddress
    // const password = data.password
    console.log(data)
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        console.log(response)
        response.json()
        if (response.status !== 200) {
          console.log('失敗')
        } else if (response.status === 200) {
          const localTourJSON = localStorage.getItem('tours')
          if (localTourJSON === null) {
            router.push('/tour')
            console.log('トップページに遷移')
          } else {
            router.push('/tour/pay')
            console.log('payに遷移')
          }

          //ここからログインしたidにローカルデータを紐付けるコードを記載
          // const { data }: { data: any } = await supabase
          //   .from('users')
          //   .select('*')
          //   .eq('mailAddress', mailAddress)
          //   .eq('password', password)
          const { data } = await axios.post(
            'http://localhost:3003/user/login',
            dto
          )

          const user = data[0]
          console.log('user', user)
          const id = user.id
          console.log('id', id)
          const localtours = JSON.parse(
            localStorage.getItem('tours') ?? '{"tours:[]}'
          )

          if (localtours.tours.length === 0) {
            return
          } else {
            //バックデータのカートの中身を取得
            // const { data }: { data: any } = await supabase
            //   .from('inCarts')
            //   .select('*')
            //   .eq('userId', id)
            const { data } = await axios.get(
              `http://localhost:3003/tour/get/cart/${id}`
            )
            console.log('datam', data)
            const cart = data[0]
            //supabaseにローカルのデータを保存。元々supabaseにあったものはそのまま。
            // await supabase
            //   .from('inCarts')
            //   .update({ tours: [...cart.tours, ...localtours.tours] })
            //   .eq('userId', id)
          }
          localStorage.clear()
        }
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <Head>
        <title>ログインページ</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          {/* <div className={styles.animation_ts}></div> */}
          <h3 className={styles.title}>下記からログインしてください。</h3>
          <div className={styles.inner_border}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.input_form}
            >
              <div>
                <div>
                  <label htmlFor="mailAddress">メールアドレス</label>
                  <div>
                    <input
                      className={styles.input_name}
                      id="mailAddress"
                      type="email"
                      {...register('mailAddress', {
                        required: true,
                      })}
                    />
                    {errors.password?.type === 'required' && (
                      <div className={styles.error_message}>
                        メールアドレスを入力してください
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="password">パスワード</label>
                  <div>
                    <input
                      className={styles.input_name}
                      id="password"
                      type="password"
                      {...register('password', {
                        required: true,
                      })}
                    />
                    {errors.password?.type === 'required' && (
                      <div className={styles.error_message}>
                        パスワードを入力してください
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.login_button}>
                  <button className={styles.button}>ログイン</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* container */}
        <Link href="create-user">
          <button type="button" className={styles.reg_button}>
            新規登録はこちら
          </button>
        </Link>
      </Layout>
    </>
  )
}
