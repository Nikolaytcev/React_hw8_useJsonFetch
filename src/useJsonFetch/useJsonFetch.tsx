import { useEffect, useState } from 'react'

export default function useJsonFetch (url: string, opts?: {method: string}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>()

  useEffect(() => {
    async function fetchData () {
        try {
            const res = await fetch(url, opts);
            if (!res.ok) {throw new Error(res.statusText)}
            const resJson = await res.json();
            setData(resJson);
        }
        catch(e) {
            if (e instanceof Error) {
                setError(e)
            }
        }
        finally {
            setLoading(false)
        }
    }
    fetchData()
  }, [url, opts])
  return ([{data, loading, error}])
}
