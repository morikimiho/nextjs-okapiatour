import Head from "next/head";
import Layout from "../../../component/layout";
import style from "../../../styles/search-JPmap.module.css";

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
              checked
            />
            <label className={style.tab_item} htmlFor="world">
              世界地図から検索する
            </label>
            <div className={style.tab_content} id="worldContent">
              <div
                className={style.wrapperworldMap}
                style={{ backgroundImage: "url(/images/map/worldMap.png)" }}
              >
                <div className={style.worldregion}>
                  <ul>
                    <li className={style.ame}>
                      <a href="#">アメリカ</a>
                    </li>
                    <li className={style.aus}>
                      <a href="#">オーストラリア</a>
                    </li>
                    <li className={style.fr}>
                      <a href="#">フランス</a>
                    </li>
                    <li className={style.egy}>
                      <a href="#">エジプト</a>
                    </li>
                    <li className={style.ko}>
                      <a href="#">韓国</a>
                    </li>
                    <li className={style.ita}>
                      <a href="#">イタリア</a>
                    </li>
                    <li className={style.phi}>
                      <a href="#">フィリピン</a>
                    </li>
                    <li className={style.bra}>
                      <a href="#">ブラジル</a>
                    </li>
                    <li className={style.sp}>
                      <a href="#">スペイン</a>
                    </li>
                    <li className={style.taiwa}>
                      <a href="#">台湾</a>
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
            />
            <label className={style.tab_item} htmlFor="jp">
              日本地図から検索する
            </label>
            <div className={style.tab_content} id="jpContent">
              <div
                className={style.wrapperjpMap}
                style={{ backgroundImage: "url(/images/map/JPmap.png)" }}
              >
                <div className={style.jpregion}>
                  <ul>
                    <li className={style.hoka}>
                      <a href="#">北海道</a>
                    </li>
                    <li className={style.miya}>
                      <a href="#">宮城</a>
                    </li>
                    <li className={style.kyo}>
                      <a href="#">京都</a>
                    </li>
                    <li className={style.osk}>
                      <a href="#">大阪</a>
                    </li>
                    <li className={style.fuku}>
                      <a href="#">福岡</a>
                    </li>
                    <li className={style.naga}>
                      <a href="#">長崎</a>
                    </li>
                    <li className={style.oki}>
                      <a href="#">沖縄</a>
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
