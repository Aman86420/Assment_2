const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const schoolRoutes = require("./routes/schoolRoutes");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send("Server is working!");
});

app.use(cors());
app.use(bodyParser.json());
app.use("/api", schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
