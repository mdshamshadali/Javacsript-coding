     //................................1st code...................................

// Let's create the custom Error by usin the "throw new Error" keyword....
try {
  console.log("Hello this shaim...");
  console.log(x);
} 
catch (error){
    throw new Error("1st off all decleare the variable x then uses....");
}
 
    // ..................................output......................................

/* 
   I'm learning try catch error...
PS C:\Users\HP\OneDrive\Desktop\Javacsript coding\Error_Handling_in_JS\finally_block> cd ../custom_Error
PS C:\Users\HP\OneDrive\Desktop\Javacsript coding\Error_Handling_in_JS\custom_Error> node script.js
Hello this shaim...
C:\Users\HP\OneDrive\Desktop\Javacsript coding\Error_Handling_in_JS\custom_Error\script.js:7
    throw new Error("1st off all decleare the variable x then uses....");
    ^

Error: 1st off all decleare the variable x then uses....
    at Object.<anonymous> (C:\Users\HP\OneDrive\Desktop\Javacsript coding\Error_Handling_in_JS\custom_Error\script.js:7:11)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.17.0

*/
  
   // ...............................2nd codes.................................


// let errorCode = 100;
// if(errorCode==100){
//     throw new Error("Invilide Json")
// }
 

// .........................Output Here.....................................

/*  
   
   
PS C:\Users\HP\OneDrive\Desktop\Javacsript coding\Error_Handling_in_JS\custom_Error> node script.js  
C:\Users\HP\OneDrive\Desktop\Javacsript coding\Error_Handling_in_JS\custom_Error\script.js:36
    throw new Error("Invilide Json")
    ^

Error: Invilide Json
    at Object.<anonymous> (C:\Users\HP\OneDrive\Desktop\Javacsript coding\Error_Handling_in_JS\custom_Error\script.js:36:11)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.17.0

*/