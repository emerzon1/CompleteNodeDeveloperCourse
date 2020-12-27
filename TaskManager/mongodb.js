const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			return console.log("Unable to connect to database");
		}
		const db = client.db(databaseName); //NOSONAR
	}
);

/*
CRUD in MongoDB --> For every method either callback OR promise methods can be used.

****************************** CREATE OPERATIONS ******************************

db.collection("Tasks").insertOne({ description: "Example", completed: false }, (err, res) => {
    if(err) {
        return console.log("Unable to create task");
    }
    console.log(res.ops);
});

db.collection("Tasks").insertMany([
    {
        description: "Finish English Homework",
        completed: false
    },
    {
        description: "Finish Health Project",
        completed: true
    },
    {
        description: "Finish MongoDB Tasks",
        completed: true
    }
], (err, res) => {
    if(err) {
        return console.log("Unable to insert tasks");
    }
    console.log(res.ops)
})

****************************** READ OPERATIONS ******************************

// db.collection("Users").findOne({ name: "Evan", _id: new ObjectID("5fe777f0f3a17032695e84d1") }, (err, res) => { //ID is OPTIONAL --> normally don't want to use it bc more work
//     if(err){
//         return console.log("Unable to fetch")
//     }
//     console.log(res)
// })
// db.collection("Users").find({ age: 14 }).toArray((err, res) => {
//     if(err){
//         return console.log("Unable to fetch");
//     }
//     console.log(res);
// });
// db.collection("Users").find({ age: 14 }).count((err, count) => {
//     if(err){
//         return console.log("Unable to fetch");
//     }
//     console.log(count);
// });

––––––––––––––––––– OR –––––––––––––––––––––

// db.collection("Users")
//     .find({ age: 14 })
//     .count()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
            
****************************** UPDATE OPERATIONS ******************************

// db.collection("Users")
//     .updateOne({ name: "Mark" }, { $set: { name: "Arthur" }, $inc: { age: 3 } })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// db.collection("Tasks")
//     .updateMany({ completed: false }, { $set: { completed: true } })
//     .then(res => console.log(res.modifiedCount))
//     .catch(err => console.log(err))

****************************** DELETE OPERATIONS ******************************

// db.collection("Users")
//     .deleteMany({ name: "Evan", age: 14 })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// db.collection("Users")
//     .deleteOne({ name: "Evan", age: 13 })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

*/
