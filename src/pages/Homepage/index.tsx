import React from 'react'
import { Text } from '@metagg/mgg-uikit'
import Page from '../../components/layout/Page'
// import * as Sections from './sections'
import Home from './sections/Home'
import Eco from './sections/Ecosystem'
import Growth from './sections/Growth'
import Chain from './sections/Chain'

// const Pages = (Sections as unknown) as { [key: string]: React.FC<{}> };
const Homepage = () => {
    return (
        <Page>
             {/* { 
                Object.keys(Pages).map((key) => {
                    const Page = Pages[key] as React.FC
                    return (<Page key={key} />)
                })
            } */}
            <Home />
            <Eco />
            <Growth />
            <Chain />
        </Page>
    )
}

export default Homepage;