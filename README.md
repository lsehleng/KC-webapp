# KC_Webapp
## Webapp for Keycloak server (client and identity provider)
This build allows for basic authentication and token refresh flows, with a login-required private page that reads users' names from access token. The webapp checks for keycloak (kc) login/sso-session on refresh, and initializes kc instance to run frontend components.
Detailed info and setup is stated in the keycloak documentation, for step-by-step process to build the app.

### Webapp code
Code is contained within `webapp/src` folder. ReactJS is used for app frontend and TailwindCSS for site styling. 

### `App.js` and `Nav.js` 
Contains the webapp structure, header and styling. 

### `pages/`
Webpages consist of public pages (`homepage.js` and `publicpage.js`); and the private page (`privatepage.js`) which requires user login to read.

### ReactKeycloakProvider
Wwapped in `Nav.js`. Needed to connect the webapp to kc client server, with kc client parameters provided in `Keycloak.js`. This is crucial to authenticate and send requests to kc oidc endpoints.

### `npm run build` then `serve -s build`
Done in `webapp/` directory. Once JS codes are complete, create the webapp build file (`webapp/build`) and run it to deploy the webapp. Ensure that the nginx proxy is configured and running first to expose the webapp to the AWS EC2 internet port.
