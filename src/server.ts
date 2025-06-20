import express from "express";
const server = express();



server.get("/",(req,res) => {
    res.send("GET PETITION");
});

server.post("/",(req,res) => {
    res.send("PETITION POST")
});
server.put("/",(req,res) => {
    res.send("PETITION PUT")
});
server.delete("/",(req,res) => {
    res.send("PETITION DELETE")
});
server.patch("/",(req,res) => {
    res.send("PETITION PATCH")
});


export default server;