'use client'
import { ITodo } from "@/gql/graphql";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface cardProps {
  todos: ITodo;
  deleteTodo: any;
}

const Card: React.FC<cardProps> = ({ todos, deleteTodo }) => {

  const [deleteLoadin , setLoading] = useState<boolean>(false)

  const router = useRouter();
  const DeleteHandler = async () => {
    setLoading(true)
   await deleteTodo(todos._id);
    router.refresh();
    setLoading(false)
  };
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{todos.text}</h2>
        <p>{todos._id}</p>
        <div className="card-actions justify-end">
          <button className="btn" onClick={DeleteHandler}>
            {!deleteLoadin ? 'Delete'  : "Loadin"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
