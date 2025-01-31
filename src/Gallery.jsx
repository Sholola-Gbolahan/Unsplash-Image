import { useQueries, useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react"
import { useGlobalContext } from "./context"

const url = `https://api.unsplash.com/search/photos?client_id=${
  // way to import value from .ENV and use in code
  import.meta.env.VITE_API_KEY
}`

console.log(import.meta.env.VITE_API_KEY)

const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  const resp = useQuery({
    //1. Adding a value that constantly update make react query to refetches data
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`)
      return result.data
    },
  })

  if (resp.isLoading) {
    return (
      <section className="image-container">
        <h4>No result found......</h4>
      </section>
    )
  }

  if (resp.isError) {
    return (
      <section className="image-container">
        <h4>There was an error....</h4>
      </section>
    )
  }

  const data = resp.data.results
  console.log(data)

  if (data < 1) {
    return (
      <section className="image-container">
        <h4>No result found......</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {data.map((item) => {
        const url = item?.urls?.regular
        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className="img"
          />
        )
      })}
    </section>
  )
}

export default Gallery
