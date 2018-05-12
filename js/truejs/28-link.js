console.log('*****Присвоение по ссылке*****');
let a = {
  one: 'Hello',
  name: 23
};
console.log(a);
let b = a; //Присвоение по ссылке
console.log(a);
// console.log(b);

// a.name = 777;
console.log(a);
console.log(b);

let c = {};
for (let key in a) {
  // console.log(key);
  // console.log(a[key]);
  c[key] = a[key];
}
console.log(c);
c.name = 777;
c.five = 5;

console.log(a);
console.log(c);
console.log('********');

class Test {
  constructor(a) {
    this.c = a;
  }
}
let myObj = new Test(5);
myObj.d = 77;
console.log(myObj);
let myObj2 = new Test(6);
console.log(myObj2);