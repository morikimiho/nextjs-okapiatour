const fetcher = (resource:any, init:any) =>
    fetch(resource, init).then((res) => res.json());




const Searchpractice = () => {
    const { data, error } = useSWR("/api/", fetcher);
    

  return <>
  
  
        </>;
};
