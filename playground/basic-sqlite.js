var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/basic-sqlite.sqlite'
});

var Todo = sequelize.define('todo', {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 250]
    }
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})

sequelize.sync({
  // force: true
}).then(function () {
  console.log('Everything is synced');

// fetch todo item by id print using toJSON catch todo not found
Todo.findById(3).then(function (todo) {
  if (todo) {
    console.log(todo.toJSON());
  } else {
    console.log('todo not found!');
  }
}).catch(function (e) {
  console.log(e);
});



//   Todo.create({
//     description: 'take out the trash'
//   }).then(function (todos) {
//     return Todo.create({
//       description: 'Clean office'
//     });
//   }).then(function(todos){
//     // return Todo.findById(1)
//     return Todo.findAll({
//       where: {
//         description: {
//           $like: '%trash%'
//         }
//       }
//     });
//   }).then(function(todos) {
//     if (todos) {
//       todos.forEach(function (todo) {
//         console.log(todo.toJSON());
//       });
//     } else {
//       console.log('no todos found');
//     }
//   }).catch(function (e) {
//     console.log(e);
//   })
 });
