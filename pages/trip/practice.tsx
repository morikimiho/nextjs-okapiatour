import useSWR from "swr";

 
  const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json());

export default function Searchpractice() {
  // let query="";
  // if(){
  //   query={areaCode}&
  // }
  const { data, error } = useSWR("/api/tours?areaCode=1", fetcher);
  // エラーになった場合は一覧は表示できないのでここで終わり
  if (error) return <div>failed to load</div>;
  // データ取得が完了していないときはローディング画面
  if (!data) return <div>loading...</div>;

  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.area}</p>
            <p>{item.country}</p>
          </div>
        );
      })}
    </>
  );
}
