import pymongo
from pymongo import MongoClient
from datetime import datetime

# //print(datetime.utcnow())


mongo_uri = "mongodb://localhost:27017"
database_name = "Learning"
collection_name = "Todos"

# Create a monogo client or Connect to MongoDB
client = MongoClient(mongo_uri)
 



#client = MongoClient() 
#client = MongoClient(‘host’, port_number) 
#client = MongoClient("localhost", 27017)


# Access the database
#db = client[database_name]

# Access the collection
#collection = db[collection_name]

print("client")

# Close the connection
client.close()