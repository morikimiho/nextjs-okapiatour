import Link from "next/link";
import { ScrTop } from "../tps";
import Image from "next/image";
import styles from "../../styles/search-page.module.css";
import { Tour } from "../../types/types";
import useSWR from "swr";

type Props = {
  url: string;
};

const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json());

export function SearchResult({ url }: Props) {
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <div id="serch_result" className={styles.search_result}>
        {url.indexOf("recommend=true") > 0 ? (
          <div className={styles.headline}>おすすめ</div>
        ) : (
          <div className={styles.headline}>検索結果</div>
        )}

        <ul>
        {data.map((item: any) => {
          return (
            <>
              <div id="content" className={styles.eachcontent}>
                <li key={item.id} className={styles.flex}>
                  <div className={styles.result_image}>
                    <Image
                      src={item.img1}
                      layout="fill"
                      alt="画像"
                      className={styles.image}
                    />
                  </div>
                  <div>
                    <div className={styles.title}>
                      <span>{item.tourName}</span>
                    </div>

                    <div className={styles.tour_tags}>
                      {item.area.length > 0 && (
                        <div className={styles.tour_tag}>{item.area}</div>
                      )}
                      {item.country.length > 0 && (
                        <div className={styles.tour_tag}>{item.country}</div>
                      )}
                      {item.city.length > 0 && (
                        <div className={styles.tour_tag}>{item.city}</div>
                      )}
                    </div>

                    <div className={styles.flex}>
                      <div id="info">
                        <ul className={styles.list}>
                          <span className={styles.span}>概要</span>
                          <li>価格: {item.price.toLocaleString()}円 ~</li>
                          <li>集合: {item.meetingPlace}</li>
                        </ul>
                      </div>

                      <div id="tourcontent">
                        <ul className={styles.list_includes}>
                          <span className={styles.span}>含まれるもの</span>
                          <li>{item.content1}</li>
                          <li>{item.content2}</li>
                          <li>{item.content3}</li>
                        </ul>
                      </div>

                      <div id="button" className={styles.button_around}>
                        {" "}
                        {/* 詳細ボタン */}
                        <Link href={`/tour/${item.id}`}>
                          <button className={styles.button}>
                            詳細はこちら{" "}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </>
          );
        })}
        </ul>
      </div>
      <ScrTop />
    </>
  );
}
