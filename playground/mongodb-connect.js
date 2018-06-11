// const MongoClient = require('mongodb').MongoClient;
/* Destructure mongodb - auto extract properties (and assign to same-name variables) from the mongodb object
 */
const {MongoClient, ObjectID} = require('mongodb');
   /*    Use extracted ObjectID
     */
// var obj = new ObjectID();
// console.log(obj);

// ES6 Destructuring - extracts new variables of same name from object properties
// var user = {name: 'Robert Tabuan', age: 37};
// var {name} = user;
// console.log(`name: ${name}`);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if(err) {
      // Exit if error occurs
      return console.log('Unable to connect to MongoDb Server...');
   }
   // Success code
   console.log('Connected to MongoDb Server.');
   const db = client.db('TodoApp');
   /*
   db.collection('Todos').insertOne({
      text: 'Something to do',
      completed: false
   }, (err, result) => {
      if(err) {
         return console.log('Unable to insert todo. ', err);
      }
      // Success code
      // ops - returns the document that was inserted
      console.log(JSON.stringify(result.ops, undefined, 2));
   });*/

   // db.collection('Users').insertOne({
   //    name: 'Robert Tabuan',
   //    age: 37,
   //    location: 'Aroroy, Masbate'
   // }, (err, result) => {
   //    if(err) {
   //       return console.log('Unable to insert user. ', err);
   //    }
   //    console.log(JSON.stringify(result.ops, undefined, 2));
   //    console.log(JSON.stringify(`timestamp: ${result.ops[0]._id.getTimestamp()}`));
   // })

   // Close the db
   client.close();
});
