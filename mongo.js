const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/Learning";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();

    const database = client.db("Learning");

    // Retrieve a cursor for listing collections
    const collectionsCursor = await database.listCollections();

    // Iterate through the cursor to get collection names
    await collectionsCursor.forEach((collection) => {
    //  console.log(collection);
    });

    const collection = database.collection("Todos");
     // Find all documents in the collection
     const documents = await collection.find({}).toArray();

     console.log(documents)

    // Call your functions or perform database operations here...
  } finally {
    // Close the connection when done
    await client.close();
    console.log("Connection to MongoDB closed");
  }
}

// Call the connectToDatabase function
connectToDatabase();
