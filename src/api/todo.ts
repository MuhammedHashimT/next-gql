import { CreateTodoDocument, CreateTodoMutation, CreateTodoMutationVariables, DeleteTodoDocument, DeleteTodoMutation, DeleteTodoMutationVariables, GetTodosDocument, GetTodosQuery, GetTodosQueryVariables } from "@/gql/graphql";
import { getUrqlClient } from "@/lib/urql";
import { cookies } from 'next/headers'

export async function GetTodos() {
  'use server'
    const { client } = getUrqlClient();
    const cookieStore = cookies() ;
    // cookieStore.set("d","fjsk") ;
    // const coke : any = cookieStore.getAll() ;
    console.log(cookieStore) ;
    
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
  
 export async function DeleteTodo(id: string) {
    // "use server";
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
  
 export async function addTodos(text: string) {
    // "use server";
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
  