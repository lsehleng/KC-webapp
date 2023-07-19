import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 realm: "test_cli",
 url: "https://18.141.147.244:443/",
// "ssl-required": "external",
 clientId: "webapp",
// "public-client": true,
// "verify-token-audience": true,
// "use-resource-role-mappings": true,
// "confidential-port": 0

});

export default keycloak;
