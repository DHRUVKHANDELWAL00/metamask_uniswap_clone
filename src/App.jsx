import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { createPublicClient} from 'viem'
import { mainnet } from 'viem/chains'
import { http, createConfig } from 'wagmi'
import { base, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
 const queryClient = new QueryClient()
const projectId = '<WALLETCONNECT_PROJECT_ID>'
import { WagmiProvider } from 'wagmi'
import {useConnect } from 'wagmi'

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})
// const client = createPublicClient({ 
//   chain: mainnet, 
//   transport: http(), 
// }) 

function App() {
  
  return (
    // Provide the client to your App
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <WalletOptions />
        <EthSend/>
      </QueryClientProvider> 
    </WagmiProvider>
  )
}
function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}
function EthSend(){
  return(
    <div>
      <input type='text' placeholder='Address....'></input>
      <button>Send 0.1 Eth</button>
    </div>
  )
}
export default App
