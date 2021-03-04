require('dotenv').config();
const config = require('./config');
const langue = require('./config_lang');
exports.NapicuApp = NapicuApp;
exports.NapicuConfig = NapicuConfig;

function NapicuConfig(data, lang) { return new NapicuApp(data, lang); }

function NapicuApp(data, lang){
    if(typeof(data) === 'undefined') data = config;
    if(typeof(lang) === 'undefined') lang = langue;
    this.data = data;
    this.lang = lang;
}

NapicuApp.prototype.UserNameChecker = function(Username) {
    console.log(this.data.Name_min);
    console.log(this.lang.UserNameInChar);
    const min = this.data.Name_min;
    const max =  this.data.Name_max;
    if(Username.length <= max){
        if(Username.length >= min){
            if(/^[a-zA-Z-' 1-9]*$/.test(Username) == true){
                return {error: false, msg: this.lang.UserPassCompleted}
            }else{
                return {error: true, msg: this.lang.UserNameInChar}
            }
        }else{
            return {error: true, msg: this.lang.UserNameShort}
        }
    }else{
        return {error: true, msg: this.lang.UserNameLong}
    }
}

NapicuApp.prototype.UserPasswordChecker = function (Password, Regexp) {
   if (typeof(Regexp) ==='undefined') Regexp = /^[a-zA-Z-' 1-9@&$<>*]*$/
   const min = this.data.Pass_min;
   const max = this.data.Pass_max;
   if(Password.length <= max){
       if(Password.length >= min){
            if(Regexp.test(Password) == true){
                return {error: false, msg: this.lang.UserPassCompleted}
            }else{  
                return {error: true, msg: this.lang.UserPassInChar}
            }
       }else{
           return {error: true, msg: this.lang.UserPassShort}
       }
   }else{
       return {error: true, msg: this.lang.UserPassLong}
   }
}





