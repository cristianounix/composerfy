import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react' 
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import './index.css'

 // Create a client
 const queryClient = new QueryClient()

const rootElement = document.getElementById('root')  as HTMLElement
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <App />
     </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)