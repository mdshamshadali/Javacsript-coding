// 2. By using assign method. multiple object cloning by using  assign method. sham = Object.assign({}, obj_name1,obj_name2,.....,obj_name100);
// added multiple object kay vlaue paired in one object...
let src = {
    age: 22,
    weight: 50,
    height: 190
 };
let arif= {
    age1: 26,
    weight1: 80,
    height1: 130
 };

 let sham = Object.assign({},src,arif);// way of multiple object cloning by using  assign method. sham = Object.assign({},src,arif)
 src.age = 25;
 console.log("src:",src);
 console.log("sham:",sham);// cloning 