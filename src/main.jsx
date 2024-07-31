import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import AppContext from "./context"
//1. import from react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// 2. setup an instance
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  //3. Wrapped entire application in the QueryClientProvider
  // 4. PAssedthe queryClient as a props

  <AppContext>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AppContext>
)
