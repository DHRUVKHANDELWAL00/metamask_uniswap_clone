import { useQueryClient } from "@tanstack/react-query";


const getBalance=async()=>{
    const balance = await client.getBalance({address: "0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD"})
console.log(balance);
return balance.toString();
  }


const GetBalancehook = () => {
    const queryClient = useQueryClient()
  const {data,isLoading,error} = useQuery({ queryKey: ['balance'], queryFn:getBalance})
  if (isLoading) {
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <ul>{data?.map((todo) => <li key={todo.id}>{todo}</li>)}</ul>
    </div>
  )
}

export default GetBalancehook