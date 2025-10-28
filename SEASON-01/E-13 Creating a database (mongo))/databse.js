const {MongoClient} = require("mongodb")

const url =
  "mongodb+srv://kajalkumari55567w_db_user:ePM291ZlVJZzvh5G@nodejs.nsojmbe.mongodb.net/";

  const client = new MongoClient(url);

  const dbName = "HeloWorld";

  async function main(){
    // Use connect method to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName)
    const collection = db.collection('User')

    const data = {
      firstname:"Deepu",
      lastname:"padukone",
      city:"mumbai"
    }
    // // insert
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    // // read
    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);

    // // update
    // const updateResult = await collection.updateOne(
    //   { firstname: "Deepu" },
    //   { $set: { city:"delhi" } }
    // );
    // console.log("Updated documents =>", updateResult);

    // find all documents with a filter of firstname :deepika

    const result = await collection.find({firstname:"Deepu"}).toArray();
    console.log("result:", result)

    const countResult = await collection.countDocuments({});
    console.log("documnet count:", countResult)

    return "done."
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(()=>client.close())