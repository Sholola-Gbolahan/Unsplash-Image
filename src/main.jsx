import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import AppContext from "./context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
//1. import react query dev tools for use
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* 2. Applying it in my code*/}
      {/* 3. this give bunch of usefull info about our query */}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </AppContext>
)
