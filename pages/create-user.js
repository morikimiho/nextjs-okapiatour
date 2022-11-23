import styles from "../styles/crete-user.module.scss";
import Head from "next/head";
import { useEffect, useState } from "react";

const CreateUser = () => {

  return (
    <>
      <Head>
        <title>新規会員登録ページ</title>
      </Head>
      <header></header>
      <section className={styles.register}>
        <h3 className={styles.title}>新規会員登録</h3>
        <div className={styles.container}>
          <form action="">
            <div className={styles.form_name}>
              <div className={styles.form_name_side}>
                <div className={styles.name_kanji}>
                  <label className={styles.form_label} htmlFor="">
                    姓
                  </label>
                  <div>
                    <input
                      className={styles.input_name}
                      type="text"
                      name="username"
                      value={formValues.username}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className={styles.name_kana}>
                  <label className={styles.form_label} htmlFor="">
                    姓(ふりがな)
                  </label>
                  <div>
                    <input className={styles.input_name} type="text" />
                  </div>
                </div>
              </div>
              {/* form_name_side */}

              <div className={`${styles.form_name_side}${styles.name_right}`}>
                <div className={styles.name_kanji}>
                  <label className={styles.form_label} htmlFor="">
                    名
                  </label>
                  <div>
                    <input className={styles.input_name} type="text" id="" />
                  </div>
                </div>
                <div className={styles.name_kana}>
                  <label className={styles.form_label} htmlFor="">
                    名(ふりがな)
                  </label>
                  <div>
                    <input className={styles.input_name} type="text" />
                  </div>
                </div>
              </div>
              {/* form_name_side */}
            </div>
            {/* form_name */}

            <div className={styles.form_birth}>
              <label className={styles.form_label} htmlFor="">
                生年月日
              </label>
              <div className={styles.form_birth_group}>
                <div className={styles.form_birth_group_y}>
                  <label className={styles.form_label} htmlFor="">
                    年(西暦)
                  </label>
                  <select className={styles.input_select} name="" id="">
                    <SelectYear />
                  </select>
                </div>
                <div className={styles.form_birth_group_m}>
                  <label className={styles.form_label} htmlFor="">
                    月
                  </label>
                  <select className={styles.input_select} name="" id="">
                    <SelectMonth />
                  </select>
                </div>
                <div className={styles.form_birth_group_d}>
                  <label className={styles.form_label} htmlFor="">
                    日
                  </label>
                  <select className={styles.input_select} name="" id="">
                    <SelectDays />
                  </select>
                </div>
              </div>
            </div>
            {/* form_birth */}

            <div className={styles.form_address}></div>

            <div className={styles.form_tmp}>
              <label className={styles.form_label} htmlFor="">
                メールアドレス
              </label>
              <div>
                <input
                  className={styles.input}
                  type="email"
                  name="mailAddress"
                  value={formValues.mailAddress}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className={styles.form_tmp}>
              <label className={styles.form_label} htmlFor="">
                パスワード
              </label>
              <div>
                <input
                  className={styles.input}
                  type="text"
                  name="password"
                  value={formValues.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className={styles.form_tmp}>
              <label className={styles.form_label} htmlFor="">
                パスワード確認
              </label>
              <div>
                <input className={styles.input} type="password" />
              </div>
            </div>
            <div className={styles.privacy}>
              <input type="checkbox" />
              <span>
                <span className={styles.red}>
                  会員規約・プライバシーポリシー
                </span>
                に同意する
              </span>
            </div>
            <div className={styles.create_user_btn}>
              <button className={styles.btn}>登録</button>
            </div>
          </form>
        </div>
        {/* container */}
      </section>
      <footer></footer>
    </>
  );
};
export default CreateUser;

// プルダウンデータ
const SelectYear = () => {
  return (
    <>
      <option value="">-</option>
      <option value="1950">1950</option>
      <option value="1951">1951</option>
      <option value="1952">1952</option>
      <option value="1953">1953</option>
      <option value="1954">1954</option>
      <option value="1955">1955</option>
      <option value="1956">1956</option>
      <option value="1957">1957</option>
      <option value="1958">1958</option>
      <option value="1959">1959</option>
      <option value="1960">1960</option>
      <option value="1961">1961</option>
      <option value="1962">1962</option>
      <option value="1963">1963</option>
      <option value="1964">1964</option>
      <option value="1965">1965</option>
      <option value="1966">1966</option>
      <option value="1967">1967</option>
      <option value="1968">1968</option>
      <option value="1969">1969</option>
      <option value="1970">1970</option>
      <option value="1971">1971</option>
      <option value="1972">1972</option>
      <option value="1973">1973</option>
      <option value="1974">1974</option>
      <option value="1975">1975</option>
      <option value="1976">1976</option>
      <option value="1977">1977</option>
      <option value="1978">1978</option>
      <option value="1979">1979</option>
      <option value="1980">1980</option>
      <option value="1981">1981</option>
      <option value="1982">1982</option>
      <option value="1983">1983</option>
      <option value="1984">1984</option>
      <option value="1985">1985</option>
      <option value="1986">1986</option>
      <option value="1987">1987</option>
      <option value="1988">1988</option>
      <option value="1989">1989</option>
      <option value="1990">1990</option>
      <option value="1991">1991</option>
      <option value="1992">1992</option>
      <option value="1993">1993</option>
      <option value="1994">1994</option>
      <option value="1995">1995</option>
      <option value="1996">1996</option>
      <option value="1997">1997</option>
      <option value="1998">1998</option>
      <option value="1999">1999</option>
      <option value="2000">2000</option>
      <option value="2001">2001</option>
      <option value="2002">2002</option>
      <option value="2003">2003</option>
      <option value="2004">2004</option>
      <option value="2005">2005</option>
      <option value="2006">2006</option>
      <option value="2007">2007</option>
      <option value="2008">2008</option>
      <option value="2009">2009</option>
      <option value="2010">2010</option>
    </>
  );
};
const SelectMonth = () => {
  return (
    <>
      <option value="">-</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </>
  );
};
const SelectDays = () => {
  return (
    <>
      <option value="">-</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
    </>
  );
};
