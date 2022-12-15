import Head from "next/head";
import Layout from "../../../component/layout";
import style from "../../../styles/search-map.module.css";

export default function searchJPmap() {
  return (
    <>
      <Head>
        <title>地図からツアーを検索</title>
      </Head>
      <Layout>
        <div className={style.pageWrapper}>
          <div className={style.tabs}>
            <input
              id="world"
              style={{ display: "none" }}
              type="radio"
              name="tab_item"
              className={style.tabSwitch}

            />
            <label className={style.tab_item} htmlFor="world">
              海外のツアーを検索する
            </label>
            <div className={style.tab_content} id="worldContent">
              <div
                className={style.wrapperworldMap}
                style={{ backgroundImage: "url(/images/map/worldMap_B.png)" }}
              >
                <div className={style.worldregion}>
                  <ul>
                    <li className={style.ame}>
                      <a href="http://localhost:3000/tour/map/9">アメリカ</a>
                    </li>
                    <li className={style.aus}>
                      <a href="http://localhost:3000/tour/map/5">オーストラリア</a>
                    </li>
                    <li className={style.fr}>
                      <a href="http://localhost:3000/tour/map/1">フランス</a>
                    </li>
                    <li className={style.egy}>
                      <a href="http://localhost:3000/tour/map/8">エジプト</a>
                    </li>
                    <li className={style.ko}>
                      <a href="http://localhost:3000/tour/map/3">韓国</a>
                    </li>
                    <li className={style.ita}>
                      <a href="http://localhost:3000/tour/map/2">イタリア</a>
                    </li>
                    <li className={style.phi}>
                      <a href="http://localhost:3000/tour/map/4">フィリピン</a>
                    </li>
                    <li className={style.bra}>
                      <a href="http://localhost:3000/tour/map/7">ブラジル</a>
                    </li>
                    <li className={style.sp}>
                      <a href="http://localhost:3000/tour/map/10">スペイン</a>
                    </li>
                    <li className={style.taiwa}>
                      <a href="http://localhost:3000/tour/map/6">台湾</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <input
              id="jp"
              type="radio"
              name="tab_item"
              style={{ display: "none" }}
              className={style.tabSwitch}
              checked
            />
            <label className={style.tab_item} htmlFor="jp">
              日本のツアーを検索する
            </label>
            <div className={style.tab_content} id="jpContent">
              <div
                className={style.wrapperjpMap}
                style={{ backgroundImage: "url(/images/map/jpMap_B.png)" }}
              >
                <div className={style.jpregion}>
                  <ul>
                    <li className={style.hoka}>
                      <a href="http://localhost:3000/tour/map/14">北海道</a>
                    </li>
                    <li className={style.miya}>
                      <a href="http://localhost:3000/tour/map/12">宮城</a>
                    </li>
                    <li className={style.kyo}>
                      <a href="http://localhost:3000/tour/map/13">京都</a>
                    </li>
                    <li className={style.osk}>
                      <a href="http://localhost:3000/tour/map/11">大阪</a>
                    </li>
                    <li className={style.fuku}>
                      <a href="http://localhost:3000/tour/map/15">福岡</a>
                    </li>
                    <li className={style.naga}>
                      <a href="http://localhost:3000/tour/map/16">長崎</a>
                    </li>
                    <li className={style.oki}>
                      <a href="http://localhost:3000/tour/map/17">沖縄</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
