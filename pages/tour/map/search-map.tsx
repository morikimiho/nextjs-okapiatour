import Head from "next/head";
import Layout from "../../../component/layout";
import style from "../../../styles/search-map.module.css";

export default function searchmap() {
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
                      <a href="/tour/map/9">アメリカ</a>
                    </li>
                    <li className={style.aus}>
                      <a href="/tour/map/5">オーストラリア</a>
                    </li>
                    <li className={style.fr}>
                      <a href="/tour/map/1">フランス</a>
                    </li>
                    <li className={style.egy}>
                      <a href="/tour/map/8">エジプト</a>
                    </li>
                    <li className={style.ko}>
                      <a href="/tour/map/3">韓国</a>
                    </li>
                    <li className={style.ita}>
                      <a href="/tour/map/2">イタリア</a>
                    </li>
                    <li className={style.phi}>
                      <a href="/tour/map/4">フィリピン</a>
                    </li>
                    <li className={style.bra}>
                      <a href="/tour/map/7">ブラジル</a>
                    </li>
                    <li className={style.sp}>
                      <a href="/tour/map/10">スペイン</a>
                    </li>
                    <li className={style.taiwa}>
                      <a href="/tour/map/6">台湾</a>
                    </li>
                    <li className={style.nor}>
                      <a href="/tour/map/27">ノルウェー</a>
                    </li>
                    <li className={style.ind}>
                      <a href="/tour/map/28">インド</a>
                    </li>
                    <li className={style.thai}>
                      <a href="/tour/map/29">タイ</a>
                    </li>
                    <li className={style.can}>
                      <a href="/tour/map/30">カナダ</a>
                    </li>
                    <li className={style.micro}>
                      <a href="/tour/map/31">ミクロネシア連邦</a>
                    </li>
                    <li className={style.haw}>
                      <a href="/tour/map/32">ハワイ</a>
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
                        <a href="/tour/map/14">北海道</a>
                      </li>
                      <li className={style.miya}>
                        <a href="/tour/map/12">宮城</a>
                      </li>
                      <li className={style.kyo}>
                        <a href="/tour/map/13">京都</a>
                      </li>
                      <li className={style.osk}>
                        <a href="/tour/map/11">大阪</a>
                      </li>
                      <li className={style.mie}>
                        <a href="/tour/map/20">三重</a>
                      </li>
                      <li className={style.fuku}>
                        <a href="/tour/map/15">福岡</a>
                      </li>
                      <li className={style.naga}>
                        <a href="/tour/map/16">長崎</a>
                      </li>
                      <li className={style.oki}>
                        <a href="/tour/map/17">沖縄</a>
                      </li>
                      <li className={style.ishi}>
                        <a href="/tour/map/18">石川</a>
                      </li>
                      <li className={style.nii}>
                        <a href="/tour/map/19">新潟</a>
                      </li>
                      <li className={style.ehi}>
                        <a href="/tour/map/21">愛媛</a>
                      </li>
                      <li className={style.hiro}>
                        <a href="/tour/map/22">広島</a>
                      </li>
                      <li className={style.kaga}>
                        <a href="/tour/map/23">香川</a>
                      </li>
                      <li className={style.toti}>
                        <a href="/tour/map/24">栃木</a>
                      </li>    
                      <li className={style.yama}>
                        <a href="/tour/map/25">山梨</a>
                      </li>  
                      <li className={style.kana}>
                        <a href="/tour/map/26">神奈川</a>
                      </li>           
                  </ul>
                  <div className={style.tihou}>
                    <div className={style.tohoku}>北海道・東北</div>
                    <div className={style.kanto}>関東</div>
                    <div className={style.kinki}>近畿</div>
                    <div className={style.kyusyu}>九州・沖縄</div>
                    <div className={style.tyubu}>中部</div>
                    <div className={style.tyugoku}>中国・四国</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
