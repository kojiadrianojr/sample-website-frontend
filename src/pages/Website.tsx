import React, { lazy } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ResetCSS } from "@metagg/mgg-uikit";
import Menu from "../components/Menu/index";
import SuspenseWithChunkError from "../components/SuspenseWithChunkError";
import PageLoader from "../components/PageLoader";
import GlobalStyle from "../style/Global";
import Footer from "../components/footer";
import Homepage from './Homepage'
import RevenueModel from "./Revenue-Model";
import Team from "./Team";
import Roadmap from "./Roadmap";
import MggToken from "./MggToken";
import Partners from "./Partners";
import Whitepaper from './Whitepaper'
import NotFound from "./NotFound";

const Website: React.FC = () => {
  // const Homepage = lazy(() => import("./Homepage"));
  // const RevenueModel = lazy(() => import('./Revenue-Model'));
  // const Team = lazy(() => import('./Team'))
  // const Roadmap = lazy(() => import("./Roadmap"));
  // const MggToken = lazy(() => import("./MggToken"));
  // const Partners = lazy(() => import("./Partners"));
  // const Whitepaper = lazy(() => import("./Whitepaper"));
  // const NotFound = lazy(() => import("./NotFound"));
  
  return (
    <HashRouter>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        {/* <SuspenseWithChunkError fallback={<PageLoader />}> */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/revenue-model' element={<RevenueModel /> } />
            <Route path="/team" element={<Team />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/mgg-token" element={<MggToken />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            {/* Redirects */}
            {/* <Route path="/" element={<Navigate replace to='/homepage' />} /> */}
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        {/* </SuspenseWithChunkError> */}
      </Menu>
    </HashRouter>
  );
};

export default Website;
