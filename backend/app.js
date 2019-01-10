const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.use("/api/posts", (req,res, next) => {
  const posts = [
    {
      statementDate: "07/08/1990",
      divorceDate: "12/08/1995",
      priorStatement: "12/10/2015",
      birthdate: "07/08/1990",
      otherBirthDate: "07/08/1990",
      marriageDate: "07/08/1990",
      separationDate: "07/08/1990",
       causeAction: "stinky farts",
       custody: "Hers",
       parentingTime: "fifty fifty",
       alimony: "$100000 per month",
       childSupport: "$20 per month",
       equitableDistribution: "string",
       counselFees: "I dont have a lawyer",
       college: "1000000",
       other: "not sure",
       yourName: "Carlos Mencia",
       streetAddress: "7619 Baby Bottom",
       city: "Jersey City",
       state: "New Jersey",
       secondParty: "Beyonce",
       secondAddress: "Bevery Hills",
       secondCity: "Los Angeles",
       secondState: "California",
       childOne: "baby",
       addressOne: "7619 Spring Morning",
       birthOne: "07/08/1990",
       personOne: "Ducks",
       childTwo: "Bobby",
       addressTwo: "7619 Spring Morning Dr.",
       birthTwo: "07/08/1990",
       personTwo: "Adrian",
       employerName:"Leap",
       employerAddress:"Address",
       employerNameTwo:"baby",
       employerTwoAddress:"123 Fake st"
    },
    {
      statementDate: "07/08/1990",
      divorceDate: "12/08/1995",
      priorStatement: "12/10/2015",
      birthdate: "07/08/1990",
      otherBirthDate: "07/08/1990",
      marriageDate: "07/08/1990",
      separationDate: "07/08/1990",
       causeAction: "stinky farts",
       custody: "Hers",
       parentingTime: "fifty fifty",
       alimony: "$100000 per month",
       childSupport: "$20 per month",
       equitableDistribution: "string",
       counselFees: "I dont have a lawyer",
       college: "1000000",
       other: "not sure",
       yourName: "Carlos Mencia",
       streetAddress: "7619 Baby Bottom",
       city: "Jersey City",
       state: "New Jersey",
       secondParty: "Beyonce",
       secondAddress: "Bevery Hills",
       secondCity: "Los Angeles",
       secondState: "California",
       childOne: "baby",
       addressOne: "7619 Spring Morning",
       birthOne: "07/08/1990",
       personOne: "Ducks",
       childTwo: "Bobby",
       addressTwo: "7619 Spring Morning Dr.",
       birthTwo: "07/08/1990",
       personTwo: "Adrian",
       employerName:"Leap",
       employerAddress:"Address",
       employerNameTwo:"baby",
       employerTwoAddress:"123 Fake st"
     }
  ];
  return res.status(200).json({
    message: "Posts fetches successfully",
    posts:posts
  });
});

module.exports = app;
