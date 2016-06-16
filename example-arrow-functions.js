var names = ['Ismael', 'Nizao', 'Victor'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Ismael'));

// var person = {
//   name: 'Ismael',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

//Challenge Area

function add(a, b){
  return a + b;
}

//addStatement
var addStatement = (a, b) => {
  return a + b;
};

console.log(addStatement(1, 3));

//addExpression
var addExpression = (a, b) => a + b;

console.log(addExpression(10, 5));
