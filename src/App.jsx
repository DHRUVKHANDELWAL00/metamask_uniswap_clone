import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import { QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient()
import { QueryClientProvider } from '@tanstack/react-query'
  async function getter() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const response = await data.json();
  return response;
}
// function App() {
//   const [todo,setTodo]=useState([]);
//   async function getter() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
//   const response = await data.json();
//   setTodo(response);
// }
//   useEffect(() => {
//     getter();
//   }, []);
//   return (
//     <>
//     {console.log(todo)}
//     {todo.length>0?(
//       {todo.map((todo)=>{
//       return(
//         <h1>{todo.title}</h1>
//       )
//     })}
//     ):(
//       <h1>Loading...</h1>
//     )
//     }
//     </>
//   )
// }

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todo />
    </QueryClientProvider>
  )
}
export default App
