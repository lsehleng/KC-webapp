import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { useKeycloak } from "@react-keycloak/web"
import Keycloak from "./Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./nav";
import Home from "./pages/homepage";
import Private from "./pages/privatepage";
import Public from "./pages/publicpage"

const App = () => {
 const { keycloak, initialized } = useKeycloak();

 return (
   <div>
     <Nav keycloak={keycloak} initialized={initialized} />
     <BrowserRouter>
       <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/public" element={<Public />} />
         <Route path="/secured" element={<Private keycloak={keycloak} initialized={initialized} />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
};

const RootApp = () => {
 return (
   <ReactKeycloakProvider
     authClient={Keycloak}
     initOptions={{
       onLoad: "check-sso",
       checkLoginIframe: false
     }}
   >
     <App />
   </ReactKeycloakProvider>
 );
};

export default RootApp;
