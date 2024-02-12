import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://${process.env.MONGO_USER || ""}:${process.env.MONGO_PASS || ""}@prod.eedyahk.mongodb.net/?retryWrites=true&w=majority`;

export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export async function connectToMongo() {
    console.log("trying");
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!",
        );
    } finally {
        await client.close();
    }
}
