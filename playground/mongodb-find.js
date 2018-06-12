const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if(err) {
      // Exit if error occurs
      return console.log('Unable to connect to MongoDb Server...');
   }
   // Success code
   console.log('Connected to MongoDb Server.');
   const db = client.db('TodoApp');

   // Find All
   // db.collection('Todos').find().toArray().then((docs) => {
   //    console.log('Todos: ');
   //    console.log(JSON.stringify(docs, undefined, 2));
   // }, (err) => {
   //    console.log('Unable to fetch todos. ', err);
   // });

   // Query
   // db.collection('Todos').find({
   //    _id: new ObjectID('5b1e35eb08b493036cc12946')
   // }).toArray().then((docs) => {
   //    console.log('Todos:');
   //    console.log(JSON.stringify(docs, undefined, 2));
   // }, (err) => {
   //    console.log('Unable to fetch todos. ', err);
   // });

   // db.collection('Todos').find().count().then((count) => {
   //    console.log(`Todos count: ${count}`);
   // }, (err) => {
   //    console.log('Unable to fetch todos. ', err);
   // });

   // Search with wildcard
   db.collection('Users').find({name: /ch/}).toArray().then((docs) => {
      console.log('Todos: ');
      console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
      console.log('Error finding document. ', err);
   });

   // Close the db
   client.close();
});
