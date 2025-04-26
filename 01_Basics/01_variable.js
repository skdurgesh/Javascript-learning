const accountId = 1234567890;
let accountEmail = "Durgesh@gmail.com"
var accountPassword = "Dug@1234";
accountCity = "Delhi";

// accountId = 2;
accountEmail = "ds@gmail.com";
accountPassword = "24e3230";
accountCity = "Mahrashtra";
let accountState;

/* Prefer not to use Var because of issue in block scope and functional scope */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
