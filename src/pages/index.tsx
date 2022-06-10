import React ,{ useEffect } from "react"
import Providers from "./Providers"
import Website from "./Website"



const IndexPage = () => {
  const isSSR = typeof window === 'undefined'
  useEffect(() => {
    console.log('Test')
  }, [])
  return (
    <React.StrictMode>
    <Providers>
      Testing....
      { !isSSR &&<Website />}
    </Providers>
    </React.StrictMode>
  )
}

export default IndexPage
