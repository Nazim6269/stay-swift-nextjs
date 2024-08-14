import { mongoURI, nodeEnvSecret } from '@/ secret';
import { MongoClient, ServerApiVersion } from 'mongodb';

if (!mongoURI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = mongoURI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;

if (nodeEnvSecret === 'development') {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri, options);
  }
  client = global._mongoClient;
} else {
  client = new MongoClient(uri, options);
}

export default client;
