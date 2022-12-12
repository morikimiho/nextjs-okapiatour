import Link from "next/link";
import { ScrTop } from "../tps";
import Image from "next/image";
import styles from "../../styles/search-page.module.css";
import { Tour } from "../../types/types";
import useSWR from "swr";
import { useEffect } from "react";
import { SearchSelect } from "./searchSelect";
import { Recommend } from "./Recommend";

type Props = {
  url: string;
};

const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json());

export function SearchResult({ url }: Props) {
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);


  return (
    <>
      <div id="serch_result" className={styles.search_result}>
        {url.indexOf("recommend=true") > 0 ? (
          <Recommend data={data}/>
        ) : (
          <SearchSelect data={data}/>
        )}
      </div>
    </>
    );
}
