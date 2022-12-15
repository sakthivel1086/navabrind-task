// var obj={name:niladri};

// var greeting =function(a,b,c){
//     return"welcom"  +this.obj.name +"to"+a+""+b+"is" +c
    
// }

// greeting.call.{obj,hi,hello,bye};
// const arry = [1, 2, 1, 3, 4, 3, 5, 6, 6];
// 012345678
// const toFindDuplicates = arry => arry.filter((item, index) => console.log(arry.indexOf(item)));
// const duplicateElements = toFindDuplicates(arry);
// const duplicateArraylenght = duplicateElements.length();
// console.log(duplicateElements.length);

// const obj=[{age:26},{age:27},{age:27}];
// function count(){
//     obj.forEach(function(ob){
//         if(ob.age === )
//         console.log(ob.age +":"+ob.age)
//     })
// }

// count()


// const datas=obj.filter((data,i)=>{let a=[]; a.push(Object.values(data.age)); return a})

// const data= Object.values(obj);
// console.log(datas);

const obj=[{name:"vijay",age:26},{name:"vijay",age:27},{name:"xcxc",age:27}];
const num = {};

obj.map((data)=>num[data.age]=(num[data.age]||0)+1);
console.log(num);


// 
// console.log(num);

// const arr = ['one', 'two', 'one', 'one', 'two', 'three','one', 'four'];

// const count = arr.reduce((accumulator, value) => {
//   return {...accumulator, [value]: (accumulator[value] || 0) + 1};
// }, {});
const arr = ['one', 'two', 'one', 'one', 'two', 'three'];

const count = {};

arr.forEach(element => {
    // console.log(count[element]);
    // console.log(count[element] || 0);
  count[element] = (count[element] || 0) + 1;
});
// 👇️ {one: 3, two: 2, three: 1}
// console.log(count);


