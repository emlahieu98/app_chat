import express from "express";
import initRoutes from "./routes/web"
import connectDB from "./config/connectDB";
import configView from "./config/viewEngine";
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session"

//init app
const app = express();
//connectMongoDB
connectDB();
//config viewEngine
configView(app);
//config session
configSession(app);
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//connect Flash
app.use(connectFlash());
//init routes
initRoutes(app);
app.listen(process.env.APP_PORT, process.env.APP_HOST ,() => {
  console.log(`Server started on ${process.env.APP_HOST}: ${process.env.APP_PORT}`);
});
