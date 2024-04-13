import useJsonFetch from "../useJsonFetch/useJsonFetch"
export interface Idata {
    url: string
}

export const Data = ({ url }: Idata) => {
  const [{data, loading, error}] = useJsonFetch(url, {method: "GET"})
  return (
    <div>
        <p>Data: {JSON.stringify(data)}</p>
        <p>Loading: {loading ? "True" : "False"}</p>
        <p>Error: {error !== undefined ? error.toString() : ''}</p>
    </div>
    
  )
}
