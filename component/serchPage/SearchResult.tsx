import useSWR from 'swr'
import styles from '../../styles/search-page.module.css'
import { Tour } from '../../types/types'
// import useSWR from 'swr'
import { SearchSelect } from './searchSelect'

type Props = {
  url: string
  subtitle: boolean
}

const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json())

// const fetcher = (url: string): Promise<Tour[]> =>
//   fetch(url).then((res) => res.json())

export function SearchResult({ url, subtitle }: Props) {
  // console.log('url', url)
  const { data } = url
  // const { data } = useSWR(url, fetcher)

  // if (error) return <div>failed to load</div>
  if (!data) return <div> </div>

  const length = data.length
  return (
    <>
      <div id="serch_result" className={styles.search_result}>
        <SearchSelect data={data} length={length} subtitle={subtitle} />
      </div>
    </>
  )
}
