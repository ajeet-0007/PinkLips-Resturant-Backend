require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
require("./models/config"); //database configuration import

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ extended: false, limit: "40mb" })); 

const userRoutes = require("./routes/user/userRoutes");
const adminRoutes = require("./routes/admin/adminRoutes");    

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});


