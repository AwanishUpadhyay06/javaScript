const accountId = 12345
let accountEmail="awanishupadhyay@gmail.com"
var password = "33333"
accountcity = "vadodara"
let accountState;
// accountId=22222 // not allowed because accountId is a constant variable
console.log(accountId);

accountEmail="awanish@gmail.com"
password = "777777"
accountcity = "amd"

console.table([accountId,accountEmail,password,accountcity,accountState])

// not use var for variable declaration because of its function scope and hoisting issues. prefer let and const for better code readability and maintainability.