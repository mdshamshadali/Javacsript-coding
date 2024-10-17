// 3. By using ittration method.
// This type of cloning object is not recommended by programming....
let src = {
    age: 22,
    weight: 50,
    height: 190
 };

 let dest ={};

 // cloning by using ittaration....
  for(let key in src ){
    let newKey = key;
    let newValue = src[key];
    //insert newKey and value in dest and creat a Cloning..
    dest[newKey] = newValue;
  }
  src.age = 200;

  console.log("src: ",src);
  console.log("dest: ",dest);
