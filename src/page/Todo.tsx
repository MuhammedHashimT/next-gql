'use client'
import { ITodo } from '@/gql/graphql'
import Card from '@/components/Card'
import { FormEventHandler, SetStateAction, useState } from 'react'
import Modal from '@/components/Modal'
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '@/context/test'

interface cardProps {
    todos : [ITodo] 
    addTodo : any
    deleteTodo : any
  }
const Todo : React.FC<cardProps> = ({todos , addTodo , deleteTodo}) => {
  const { userId, setUserId, data, setData } = useGlobalContext();

  const router = useRouter()
  const [modalOpen,setModalOpen] = useState<boolean>(false)
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const [isLoadin , setIsLoading] = useState<boolean>(false)
  const [todosList , setTodosList ] = useState<SetStateAction<[ITodo]>>(todos)

  const handleSubmit : FormEventHandler<HTMLFormElement>  = async (e)=>{

    e.preventDefault()
    console.log("reached");
    setIsLoading(true)
    const result = await addTodo(newTaskValue)
    setNewTaskValue("")
    setIsLoading(false)
    setModalOpen(false);
    const data : SetStateAction<ITodo> = result.data.addTodo
    console.log(data);
    
    // setTodosList([...todosList , data])
    console.log(todosList);
    
    router.refresh();

  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <button className="w-96 btn btn-outline " onClick={()=> setModalOpen(true)} >Add todo</button>
      <Modal key={0} modalOpen={modalOpen} setModalOpen={setModalOpen}> 
      <form onSubmit={handleSubmit} >
          <h3 className='font-bold text-lg'>Add new task</h3>
          <div className='modal-action'>
            <input
              value= {newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full'
            />
            <button type='submit' className='btn'>
              {isLoadin ? "Loading" : "SUBMIT"}
            </button>
          </div>
        </form>
      </Modal>
    <div className='flex flex-wrap p-3'>
      {
        todos && todos.map((todo,key)=>{
          return (
            <div className='m-2'>
             <Card todos={todo} key={key} deleteTodo={deleteTodo}/>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Todo