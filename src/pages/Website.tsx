import React, { lazy } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ResetCSS } from "@metagg/mgg-uikit";
import Menu from "../components/Menu/index";
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
  // const Homepage = loadable(() => import("./Homepage"));
  // const RevenueModel = loadable(() => import('./Revenue-Model'));
  // const Team = loadable(() => import('./Team'))
  // const Roadmap = loadable(() => import("./Roadmap"));
  // const MggToken = loadable(() => import("./MggToken"));
  // const Partners = loadable(() => import("./Partners"));
  // const Whitepaper = loadable(() => import("./Whitepaper"));
  // const NotFound = loadable(() => import("./NotFound"));
  
  return (
    <HashRouter>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
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
      </Menu>
    </HashRouter>
  );
};

export default Website;
