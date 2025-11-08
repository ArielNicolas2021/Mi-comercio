import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://eltrailer13:OTyPdEcSBCXOAm3J@cluster0.xyyek2c.mongodb.net/");
    console.log("Conectado a MongoDB.")
  }
  catch (e) {
    console.log(e)
  }
}