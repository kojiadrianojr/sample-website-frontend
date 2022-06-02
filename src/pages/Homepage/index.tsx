import React from 'react'
import { Text } from '@metagg/mgg-uikit'
import Page from '../../components/layout/Page'
import * as Sections from './sections'

const Pages = (Sections as unknown) as { [key: string]: React.FC<{}> };
console.log(Pages)
const Homepage = () => {
    return (
        <Page>
             { 
                Object.keys(Pages).map((key) => {
                    const Page = Pages[key] as React.FC
                    return (<Page key={key} />)
                })
            }
        </Page>
    )
}

export default Homepage;