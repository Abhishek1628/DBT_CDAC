// import { MongoClient } from "mongodb";
// const client = new MongoClient("mongodb://192.168.1.16:27017")

// async function run() {
//     try {
//         await client.connect();
//         const database = client.db("db1");
//         const x = database.listCollections();
//         for await (const doc of x) {
//             console.log(doc.name)
//         }
//     } catch (error) {

//     }
//     finally {
//         await client.close();
//         console.log("connection closed....");
//     }
// }
// run();

// import { MongoClient } from "mongodb";
// const client = new MongoClient("mongodb://192.168.1.16:27017")

// async function run() {
//     try {
//         await client.connect();
//         const database = client.db("db1");
//         const m = database.collection("movies");
//         const cursor = m.find({}, {
//             projection: {
//                 _id: false,
//                 movie_title: true,
//                 genres: true
//             }
//         });
//         for await (let doc of cursor) {
//             console.log(doc);
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
//     finally {
//         await client.close();
//         console.log("connection closed....");
//     }
// }
// run();


// import { MongoClient } from "mongodb";
// const client = new MongoClient("mongodb://192.168.1.16:27017")

// async function run() {
//     try {
//         await client.connect();
//         const database = client.db("db1");
//         const m = database.collection("movies");
//         const project = {
//             projection: {
//                 _id: true,
//                 movie_title: true,
//                 genres: true
//             }
//         };
//         const query = {
//             _id: 7
//         }
//         const cursor = m.find(query, project);

//         for await (let doc of cursor) {
//             console.log(doc);
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
//     finally {
//         await client.close();
//         console.log("connection closed....");
//     }
// }
// run();


// import { MongoClient } from "mongodb";
// const client = new MongoClient("mongodb://192.168.1.16:27017")

// async function run(x) {
//     try {
//         await client.connect();
//         const database = client.db("db1");
//         const m = database.collection("movies");
//         const project = {
//             projection: {
//                 _id: true,
//                 movie_title: true,
//                 genres: true
//             }
//         };
//         const query = {
//             _id: x
//         }
//         const cursor = m.find(query, project);

//         for await (let doc of cursor) {
//             console.log(doc);
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
//     finally {
//         await client.close();
//         console.log("connection closed....");
//     }
// }
// run(7);


import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://192.168.1.16:27017")
