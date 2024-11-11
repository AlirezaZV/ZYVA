const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
// const { Configuration, OpenAIApi } = require("openai");
// const openAiRoutes = require("./routes/openai.js");
const authRoutes = require("./routes/auth.js");
// const wss = require("./routes/ws.js");
// const chatHistory = require("./routes/chatInfo.js");
// const db = require('./routes/db.js');

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* OPEN AI CONFIGURATION */
// const configuration = new Configuration({
//     apiKey: process.env.OPEN_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// app.use(cors({
//     origin: 'http://192.168.1.9:80', // Specify the frontend URL
//     methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allowed methods
//     credentials: true // If using cookies or authentication headers
// }));
/* ROUTES */
// app.use("/openai", openAiRoutes);
app.use("/auth", authRoutes);
// app.use("/ws", wss);
// app.use("/chatInfo", chatHistory);

/* SERVER SETUP */
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
