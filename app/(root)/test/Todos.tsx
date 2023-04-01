
import { useQuery } from 'react-query'
export interface ITodo {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export default function Todos() {
  const { isLoading, error, data } = useQuery<ITodo[]>('https://jsonplaceholder.typicode.com/comments')

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error instanceof Error) {
    return <div>error!! {JSON.stringify(error)}</div>
  }

  return (
    <>
      <div>
        <h2>todos</h2>
      </div>
      <div>
        {!(data == null) && data.map(row => <div key={row.id}>{JSON.stringify(row)}</div>)}
      </div>
    </>
  )
}
