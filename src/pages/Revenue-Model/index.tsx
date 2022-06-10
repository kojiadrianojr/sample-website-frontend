import React from 'react'
import Page from '../../components/layout/Page'
import Header from './sections/Header'
import Details from './sections/Details'
// import * as Sections from './sections';

// const Pages = (Sections as unknown) as { [key: string]: React.FC<{}> };
const RevenueModel:React.FC = () => {
    return (
        <Page>
           <Header />
           <Details />
        </Page>
    )
}

export default RevenueModel;