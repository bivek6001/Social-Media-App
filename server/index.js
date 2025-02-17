import express from "express"
import http from "http"
// import nodemailer from "nodemailer"
const app = express();

const server = http.createServer(app)


app.get("/", async (req, res) => {

    res.json("hh")

}

)


server.listen(9000, () => {
    console.log("server is listening")
})



