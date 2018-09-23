import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk';

let appId = 'zias-atmil'

function initializeAndLogin() {
  const client = Stitch.initializeDefaultAppClient('zias-atmil');
  client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
    document.getElementById('auth-status').innerHTML = 
      `Logged in as anonymous user with id ${user.id}`;
  });
}

window.onload = initializeAndLogin;