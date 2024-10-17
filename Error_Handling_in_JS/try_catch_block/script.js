try{
    console.log("Hello this shaim...");
    console.log("I'm learning try catch error...");
    console.log(x);
    console.log("after come error does't work this line1 of code");
    console.log("after come error does't work this line2 of code");
    console.log("after come error does't work this line3 of code");

}
catch(error){
    // yaha pr hm defined krte h kis type ka error show krwana chahte h ya fir error ke sath hm kya krna chahte h..
    // write retry logic 
    //fallbackError_Handling_in_JS machanism..
    //logging..
    // custom error..
    console.log("I am inside the catch block:");
    console.log("your Error is here:", error);
}
// ............output is code is here.............

/* 
PS C:\Users\HP\OneDrive\Desktop\Javacsript coding> cd Error_Handling_in_JS
PS C:\Users\HP\OneDrive\Desktop\Javacsript coding\Error_Handling_in_JS> cd try_catch_block
PS C:\Users\HP\OneDrive\Desktop\Javacsript coding\Error_Handling_in_JS\try_catch_block> node script.js
Hello this shaim...
I'm learning try catch error...
I am inside the catch block:
your Error is here: ReferenceError: x is not defined
    at Object.<anonymous> (C:\Users\HP\OneDrive\Desktop\Javacsript coding\Error_Handling_in_JS\try_catch_block\script.js:4:17)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49
PS C:\Users\HP\OneDrive\Desktop\Javacsript coding\Error_Handling_in_JS\try_catch_block>
*/
