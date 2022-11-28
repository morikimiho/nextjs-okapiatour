import useSWR from 'swr';

const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json());

export default function cartList() {
  // 商品一覧をJSON Serverから取得
  const { data, error } = useSWR("/api/cart?deleted=false", fetcher);

  // エラーになった場合は一覧は表示できないのでここで終わり
  if (error) return <div>failed to load</div>;
  // データ取得が完了していないときはローディング画面
  if (!data) return <div>loading...</div>;

  // 取得したdataは Item[] なので、一行に一件ずつ表示
  return (
    <>
      {data.map((cart:any) => {
        return (
          <div key={cart.id}>
            <p>{cart.id}</p>
            <p>{cart.description}</p>
          </div>
        );
      })}
    </>
  );
}
