export interface ITodo {
    _id: string;
    text: string;
    completed: boolean;
    __typename: "ITodo";
}

export interface Todo {
    title: String;
    completed: boolean;
    id: String;
}