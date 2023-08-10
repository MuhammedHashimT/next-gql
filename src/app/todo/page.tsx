import {
  CreateTodoDocument,
  CreateTodoMutation,
  CreateTodoMutationVariables,
  DeleteTodoDocument,
  DeleteTodoMutation,
  DeleteTodoMutationVariables,
  GetTodosDocument,
  GetTodosQuery,
  GetTodosQueryVariables,
  ITodo,
} from "@/gql/graphql";
import { getUrqlClient } from "@/lib/urql";
import Todo from "@/page/Todo";
import { cookies } from "next/headers";

async function getTodos() {
  // "use server"
  const cooikie = cookies().get('hashim')
  console.log(cooikie);
  
  const { client } = getUrqlClient();

  const result = await client.query<GetTodosQuery, GetTodosQueryVariables>(
    GetTodosDocument,
    {},
    {
      // fetchOptions :{
      //   cache : "force-cache"
      // }
    }
  );

  return result;
}

async function deleteTodo(id: string) {
  "use server";
//   if (typeof window === "object") {
//     //This code is executed in the browser
//      console.log(window.innerWidth)
//  }
 
  // if (window.confirm("Are you sure?")) {
    const { client } = getUrqlClient();

    console.log("reached 2");

    const result = await client.mutation<
      DeleteTodoMutation,
      DeleteTodoMutationVariables
    >(DeleteTodoDocument, {
      id,
    });

    return result;
  // }
}

async function addTodos(text: string) {
  "use server";
  const { client } = getUrqlClient();

  console.log("reached 2");

  const result = await client.mutation<
    CreateTodoMutation,
    CreateTodoMutationVariables
  >(CreateTodoDocument, {
    status: false,
    text: text,
  });

  return result;
}

export default async function Home() {

  const result = await getTodos();
  const data: ITodo | any = result?.data?.getTodo || null;

  return (
    <main className="">
      {data ? <Todo key={1} todos={data} addTodo={addTodos} deleteTodo={deleteTodo} /> : "No data"}
    </main>
  );
}
