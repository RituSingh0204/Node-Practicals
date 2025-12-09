const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');

async function runDemo() {
  const memServer = await MongoMemoryServer.create();
  const connectionString = memServer.getUri();
  const client = new MongoClient(connectionString);

  await client.connect();
  console.log(' Connected to  MongoDB');

  const database = client.db('testdb');
  const collection = database.collection('users');

  const newUser = { name: 'Ritu Singh', age: 22, email: 'ritu@example.com' };
  const insertResult = await collection.insertOne(newUser);
  console.log('Inserted user with ID:', insertResult.insertedId.toString());

  const allUsers = await collection.find({}).toArray();
  console.log('All users:', allUsers);

  await client.close();
  await memServer.stop();
  console.log('Stopped MongoDB');
}

runDemo();
