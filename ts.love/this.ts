let someObj = {
  a() {
    console.log(this);
  },

  b: () => {
    console.log(this);
  }
}

let w1 = someObj.a;
let w2 = someObj.b;

w1();

w2();

someObj.a();
someObj.b();

let someObj2 = {
  name: 'yugo',
  a: () => { },
  b: () => { }
}

someObj2.a = someObj.a;
someObj2.a();

someObj2.b = someObj.b;
someObj2.b();