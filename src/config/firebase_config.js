
const admin = require("firebase-admin");

const serviceAccount = require("../config/service-accounts/dev.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
module.exports=admin;
