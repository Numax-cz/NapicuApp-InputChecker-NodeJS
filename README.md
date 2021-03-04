# NapicuApp Input Checker NodeJS
# Jednoduché nastavení
* Jednoduché nastavení načte výchozí parametry z `config.js` a `config_lang.js`
```js
const NapicuApp = require('./NapicuApp');

const NapicuApp_Data = NapicuApp.NapicuConfig();

```
# Pokročilé nastavení
* Nastavení `prvního` parametru (min. a max. délka údajů)

```js 
const NapicuApp = require('./NapicuApp');

const NapicuApp_Data = NapicuApp.NapicuConfig(
    {
        Name_min: 3,    //Nastavení min. délky jména
        Name_max: 12,   //Nastavení max. délky jména
        Pass_min:10,    //Nastavení min. délky hesla
        Pass_max:100,   //Nastavení max. délky hesla
    }
);
```
* Nastavení `druhého` parametru (min. a max. délka údajů, jazyk)

```js 
const NapicuApp = require('./NapicuApp');

const NapicuApp_Data = NapicuApp.NapicuConfig(
    {
        Name_min: 3,    //Nastavení min. délky jména
        Name_max: 12,   //Nastavení max. délky jména
        Pass_min:10,    //Nastavení min. délky hesla
        Pass_max:100,   //Nastavení max. délky hesla
    },
    {
        UserNameInChar: "Invalid characters",
        UserNameShort: "Username is too short",
        UserNameLong: "Username is too long ",
        UserPassInChar: "Invalid characters",
        UserPassShort: "Password is too short",
        UserPassLong: "Password is too long ",
        UserNameCompleted: "Username is correct",
        UserPassCompleted: "Password is correct"
    }
);
```
# Funkce - Kontrola jména
```js
const NapicuApp = require('./NapicuApp');

const NapicuApp_Data = NapicuApp.NapicuConfig(); //Použitý výchozí config

const name = NapicuApp_Data.UserNameChecker("GitHubLove");
const name_2 = NapicuApp_Data.UserNameChecker(" GitHubLove");
const name_3 = NapicuApp_Data.UserNameChecker("Gi")
const name_4 = NapicuApp_Data.UserNameChecker(" GitHubLoveeeeeeeeeeeeeee");

console.log(name);    //{ error: false, msg: 'Username is correct' }
console.log(name_2);  //{ error: true, msg: 'Invalid characters' }
console.log(name_3);  // { error: true, msg: 'Username is too short' }
console.log(name_4);  //{ error: true, msg: 'Username is too long' }
```
# Funkce - Kontrola hesla
```js
const NapicuApp = require('./NapicuApp');

const NapicuApp_Data = NapicuApp.NapicuConfig(); //Použitý výchozí config
const Heslo = NapicuApp_Data.UserPasswordChecker("GitHubLove123"); 
// 1. Parametr - Heslo 
// 2. Parametr(NEPOVINNÝ) - Regular expression (výchozí - /^[a-zA-Z-' 1-9@&$<>*]*$/)

const pass = NapicuApp_Data.UserPasswordChecker("GitHubLove");
const pass_2 = NapicuApp_Data.UserPasswordChecker(" GitHubLove");
const pass_3 = NapicuApp_Data.UserNameChecker("Gi");

console.log(pass); //{ error: false, msg: 'Password is correct' }
console.log(pass_2); //{ error: true, msg: 'Invalid characters' }
console.log(pass_3); //{ error: true, msg: 'Password is too short' }
```
* Nastavení druhého parametru - Regular expression
```js
const pass = NapicuApp_Data.UserPasswordChecker("GitHubLove123"); //Výchozí je /^[a-zA-Z-' 1-9@&$<>*]*$/
console.log(pass); //{ error: false, msg: 'Password is correct' }

const pass_2 = NapicuApp_Data.UserPasswordChecker("GitHubLove123", /^[a-zA-Z]*$/);
console.log(pass_2); //{ error: true, msg: 'Invalid characters' }
```





