import { errorHandler } from './middleware/errorHanlder';
import express, { ErrorRequestHandler, urlencoded } from "express";
import createHttpError from "http-errors";
import authRoute from "../src/routes/authRoute"
import mongoose from "mongoose";
import { PORT,URL_DB } from './config/db';

const app=express()
app.use(express.json());
app.use(urlencoded({extended:true}))
app.use("/pharmacom/",authRoute)
app.use(()=>{
    throw createHttpError(404,"note found page")
})
app.use(errorHandler);

mongoose
  .connect(URL_DB)
  .then(() => {
    console.log("Success to Connected with database ");
    app.listen(PORT, () => {
      console.log(`Listening On PORT ${PORT}`);
    });
  })
  .catch(() => {
    throw createHttpError(501, "Unable to connect database");
  });