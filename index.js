const express = require("express")

const app = express()

const PORT = process.env.PORT || 6000

app.get("/", (req, res) => {
  res.status(200).send("WELCOME TO THE CICD PIPELINE TEST")
})

app.listen(PORT, () => {
  console.log("Server running")
})
