import React from 'react';
import { useEffect, useState } from "react";
//import { useKeycloak } from "@react-keycloak/web";


const Private = ({ keycloak, initialized }) => {
// const { keycloak, initialized } = useKeycloak();
 const [isAuthenticated, setIsAuthenticated] = useState();

 useEffect(() => {
   const checkAuthentication = async () => {
     if (initialized) {
//         await keycloak.init({ onLoad: "check-sso" });
         const authenticated = await keycloak.authenticated;
         setIsAuthenticated(authenticated);
     }
   };

   checkAuthentication();
 }, [initialized, keycloak]);

 return (
   <div>
     {isAuthenticated ? (
       <h1 className="text-black text-4xl place-items-center">
         Users' Page - Hello {keycloak.tokenParsed.preferred_username} :)
       </h1>
     ) : (
       <h1 className="text-black text-4xl place-items-center">Page locked - Login to view</h1>
     )}
   </div>
 );
};

export default Private;
