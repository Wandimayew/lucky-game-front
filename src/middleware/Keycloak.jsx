import Keycloak from 'keycloak-js';

const initOptions = {
    url: 'http://localhost:8080/',
    realm: 'demo',
    clientId: 'game',
    checkLoginIframe: true, 
    pkceMethod: 'S256'
}
console.log("initializing");

const keycloaks = new Keycloak(initOptions)

export default keycloaks;