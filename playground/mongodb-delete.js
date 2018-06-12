const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if(err) {
      ////Exit if error occurs
      return console.log('Unable to connect to MongoDb Server...');
   }
   ////Success code
   console.log('Connected to MongoDb Server.');
   const db = client.db('TodoApp');

   //// deleteMany
   // db.collection('Todos').deleteMany({text: 'Fetch Water'}).then((result) => {
   //    console.log(result);
   // }, (err) => {
   //    console.log('Unable to delete docs.');
   // });
   //// deleteOne
   // db.collection('Todos').deleteOne({text: 'Wash Clothes'}).then((result) => {
   //    console.log(result);
   // });
   //// findOneAndDelete
   db.collection('Todos').findOneAndDelete({_id: new ObjectID('5b1f2b9d374aac2e9d11f93f')}).then((result) => {
      console.log(result);
   });
   //// Close the db
   client.close();
});
