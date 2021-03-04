const NapicuApp = require('./NapicuApp');

const NapicuApp_Data = NapicuApp.NapicuConfig();

const pass_2 = NapicuApp_Data.UserPasswordChecker("GithubLove123", /^[a-zA-Z]*$/);
console.log(pass_2) 





