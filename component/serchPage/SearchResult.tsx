import styles from "../../styles/search-page.module.css";
import useSWR from "swr";
import { SearchSelect } from "./searchSelect";
import { Recommend } from "./Recommend";
import { supabase } from "../../utils/supabaseClient";

type Props = {
  url: string;
};


const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json());

export function SearchResult({ url }: Props) {
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
 

  const length=data.length
  return (
    <>
      <div id="serch_result" className={styles.search_result}>
         <SearchSelect data={data} length={length}/>
      </div>
    </>
    );
}
