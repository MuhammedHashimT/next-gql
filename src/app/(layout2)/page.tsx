// "use client"
import { GetTodos } from '@/api/todo';
import Card from '@/components/Card'
import { GetTodosDocument, GetTodosQuery, GetTodosQueryVariables, ITodo } from '@/gql/graphql';
import { getUrqlClient } from '@/lib/urql';

// async function getTodos() {
//   'use server'
//   const {client} = getUrqlClient();

//   const result = await client.query<GetTodosQuery, GetTodosQueryVariables>(
//     GetTodosDocument,
//     {}
//   );

//   return result
// }

export default async function Home() {

  const result = await GetTodos()
  const data   = result?.data?.getTodo || null
  
  return <main className='flex flex-wrap p-3'>
    {
    
    data ? data?.map((value : ITodo | any ,key : number )=>{
      return (
        <div className='m-2' key={key}>
        <Card key={key} todos={value} deleteTodo={GetTodos}/>
        </div>

      )
    }) : "No data"
  
  }
  
  </main>;
}
