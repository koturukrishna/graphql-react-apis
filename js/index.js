// // console.log("Krishna");

// // function outer(a) {
// //   return function inner(b) {
// //     return a * b;
// //   };
// // }

// // let c = outer(4)(5);

// // console.log(c);

// // const mul = (a) => (b) => a * b;

// // console.log(mul(5)(5));
// // const person = {
// //   name: "Krishna",
// //   age: 30,
// //   address: {
// //     street: "MG Road",
// //     city: "Hyderabad",
// //     pincode: 500001,
// //   },
// // };

// // console.log(person);

// // // shallow copy and deep copy

// // // const person2 = { ...person }; // shallow copy

// // const person2 = JSON.parse(JSON.stringify(person)); // deep copy

// // person2.name = "krish";
// // person2.address.street = "kamareddy";

// // console.log(person);
// // console.log(person2);

// // // api callins ajax call

// // // const http = new XMLHttpRequest();

// // // http.open("GET", "https://fakestoreapi.com/products");

// // // http.send();

// // // http.onloadend = function () {
// // //   console.log(JSON.parse(http.responseText));
// // // };

// // // error handling

// // // function div(a, b, cb) {
// // //   //   console.log(a / b);
// // //   if (b === 0) {
// // //     return cb("Can not divide with 0", null);
// // //   }
// // //   return cb(null, a / b);
// // // }

// // // div(10, 0, function (err, result) {
// // //   if (err) {
// // //     console.log("Error", err);
// // //   } else {
// // //     console.log(result);
// // //   }
// // // });

// // // function division(a, b) {
// // //   if (b === 0) {
// // //     return Promise.reject("Can not divide with 0");
// // //   }
// // //   return Promise.resolve(a / b);
// // // }

// // // division(10, 2)
// // //   .then((res) => console.log(res))
// // //   .catch((error) => console.log("Error", error));

// // console.log(person);

// // const personK = Object.entries(person);
// // console.log(personK);

// // for (let key in person) {
// //   console.log(person[key]);
// // }

// // const {
// //   name,
// //   age,
// //   address: { street, city, pincode },
// // } = person;

// // console.log(name, age, city);

// // template literals

// const myName = "Krishna Koturu";

// console.log(`Hello Mr ${myName}`);

// // closures scope

// // function outer() {
// //   let k = 8;
// //   return function inner() {
// //     k += 1;
// //     return k;
// //   };
// // }

// // const cl = outer();
// // console.dir(cl);
// // console.dir(cl);
// // console.dir(cl);

// const ar = [10, 20, [14, 25, [55, 62]]];

// // console.log(ar.flat(2));

// // function details() {
// //   return new Promise((resolve, reject) => {
// //     const success = !true;
// //     setTimeout(() => {
// //       if (success) {
// //         resolve("Hello Krishna you are welcome");
// //       } else {
// //         reject("you are not allowed");
// //       }
// //     });
// //   });
// // }

// // details()
// //   .then((res) => console.log(res))
// //   .catch((error) => console.log(error));

// // setTimeout(() => {
// //   console.log("please login");
// // }, 2000);

// // console.log("please register");

// // setTimeout(() => {
// //   console.log("thank you");
// // }, 1000);

// function register() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("please register");
//       resolve();
//     }, 2000);
//   });
// }

// function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("please login");
//       resolve();
//     }, 1000);
//   });
// }

// function thankyou() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("thank you");
//     }, 5000);
//   });
// }

// // register(function(){
// //     login
// // })

// // register(function () {
// //   login(function () {
// //     thankyou();
// //   });
// // });

// register().then(login).then(thankyou);

// axios
//   .get("https://fakestoreapi.com/products")
//   .then((res) => console.log(res.data))
//   .catch((err) => {
//     console.log(err);
//   });

// generators

function* generators() {
  yield 5;
  yield 8;
  yield 12;
}

console.log(generators().next());
console.log(generators().next());
console.log(generators().next());
console.log(generators().next());

console.log("Hello Krishna");
