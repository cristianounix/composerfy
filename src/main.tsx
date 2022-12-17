import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import './index.css'

 // Create a client
 const queryClient = new QueryClient()

const rootElement = document.getElementById('root')  as HTMLElement
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
     </QueryClientProvider>
  </React.StrictMode>,
)