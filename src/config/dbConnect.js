import mongoose from "mongoose"

mongoose.connect("mongodb+srv://ltcabral21:Geil4321@alura.e2vwklw.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;