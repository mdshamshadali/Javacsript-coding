// 2. By using assign method. sham = Object.assign({},var_name) like src..
let src = {
    age: 22,
    weight: 50,
    height: 190
 };

 let sham = Object.assign({},src);// way of cloning by using  assign method. sham = Object.assign({},src)
 sham.age = 25;
 console.log("src:",src);
 console.log("sham:",sham);// cloning 