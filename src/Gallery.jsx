import { useQueries, useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react"

const url =
  "https://api.unsplash.com/search/photos?client_id=tTapuA3As4sJADIUT7K1Mh6tTFM6cn7fIntenDNfiz0&query=dog"

const Gallery = () => {
  const resp = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url)
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
