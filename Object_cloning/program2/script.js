// object Cloning....
// There are three ways of object cloning..
// 1. By using spread opertor.  ... like let sham= {...age}
 let src = {
    age: 22, 
    weight: 50,
    height: 190
 };

 let sham = {...src};// way of cloning by using spread opretor. {...var_name}; 
 src.age = 25;
 console.log("src:",src);
 console.log("sham:",sham);// cloning 