import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect('mongodb+srv://shivampatil2107:oKX7O3Tvc6f4dN6V@cluster0.bg9rs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
