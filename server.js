require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const { graphqlHTTP } = require('express-graphql');
const typeDefs = require("./graphql/schema")
const resolver = require("./graphql/resolver")
const isAuth = require("./middleware/isAuth")

const app = express()
app.use(bodyparser.json())



app.get("/", (req, res) => {
  res.send("Hello from server..");
});
app.use(isAuth)

app.use("/graphql", graphqlHTTP({
  schema: typeDefs,
  rootValue: resolver,
  graphiql: true
}))

  
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.99npq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(url,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then(()=>{
    app.listen(4000)
  }).then(()=>{
    console.log("Connected to mongoose")
  }).catch(err=>{
    console.log("connection failed to mongoose")
  })

// app.listen(4000,()=>{
//   console.log("App is running on port 4000")
// })