import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
async function getter() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const response = await data.json();
  return response;
}
function Todo() {
  // Access the client
  const queryClient = useQueryClient()

  // Queries
  const {data,isLoading,error} = useQuery({ queryKey: ['todos'], queryFn: getter })
  if (isLoading) {
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <ul>{data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
    </div>
  )
}

export default Todo
