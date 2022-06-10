import * as React from "react"
import Providers from "./Providers"
import Website from "./Website"

const isBrowser = typeof window !== "undefined"

const IndexPage = () => {
  return (
    <React.StrictMode>
    <Providers>
      <Website />
    </Providers>
    </React.StrictMode>
  )
}

export default IndexPage
