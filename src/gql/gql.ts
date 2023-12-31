/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateTodo($text: String!, $status: Boolean!) {\n  addTodo(text: $text, completed: $status) {\n    text\n    completed\n    _id\n  }\n}\n\nmutation DeleteTodos($id: ID!) {\n  deleteTodo(id: $id)\n}\n\nquery GetOnes($id: ID!) {\n  getOne(id: $id) {\n    text\n    completed\n    _id\n  }\n}": types.CreateTodoDocument,
    "mutation DeleteTodo($id: ID!) {\n  deleteTodo(id: $id)\n}": types.DeleteTodoDocument,
    "query GetTodos {\n  getTodo {\n    text\n    completed\n    _id\n  }\n}": types.GetTodosDocument,
    "query GetOne($id: ID!) {\n  getOne(id: $id) {\n    text\n    completed\n    _id\n  }\n}": types.GetOneDocument,
    "mutation UpdateTodo($text: String!, $status: Boolean!, $id: ID!) {\n  updateTodo(text: $text, completed: $status, id: $id) {\n    text\n    completed\n    _id\n  }\n}": types.UpdateTodoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateTodo($text: String!, $status: Boolean!) {\n  addTodo(text: $text, completed: $status) {\n    text\n    completed\n    _id\n  }\n}\n\nmutation DeleteTodos($id: ID!) {\n  deleteTodo(id: $id)\n}\n\nquery GetOnes($id: ID!) {\n  getOne(id: $id) {\n    text\n    completed\n    _id\n  }\n}"): (typeof documents)["mutation CreateTodo($text: String!, $status: Boolean!) {\n  addTodo(text: $text, completed: $status) {\n    text\n    completed\n    _id\n  }\n}\n\nmutation DeleteTodos($id: ID!) {\n  deleteTodo(id: $id)\n}\n\nquery GetOnes($id: ID!) {\n  getOne(id: $id) {\n    text\n    completed\n    _id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteTodo($id: ID!) {\n  deleteTodo(id: $id)\n}"): (typeof documents)["mutation DeleteTodo($id: ID!) {\n  deleteTodo(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTodos {\n  getTodo {\n    text\n    completed\n    _id\n  }\n}"): (typeof documents)["query GetTodos {\n  getTodo {\n    text\n    completed\n    _id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetOne($id: ID!) {\n  getOne(id: $id) {\n    text\n    completed\n    _id\n  }\n}"): (typeof documents)["query GetOne($id: ID!) {\n  getOne(id: $id) {\n    text\n    completed\n    _id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateTodo($text: String!, $status: Boolean!, $id: ID!) {\n  updateTodo(text: $text, completed: $status, id: $id) {\n    text\n    completed\n    _id\n  }\n}"): (typeof documents)["mutation UpdateTodo($text: String!, $status: Boolean!, $id: ID!) {\n  updateTodo(text: $text, completed: $status, id: $id) {\n    text\n    completed\n    _id\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;