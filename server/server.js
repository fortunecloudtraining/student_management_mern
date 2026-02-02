const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
// 2️⃣ CORS configuration (VERY IMPORTANT)

const app = express();

connectDB();
app.use(cors({
  origin: "http://localhost:5173", // Vite frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.use("/api/auth",require("./routes/authRoutes"));
app.use("/api/courses",require("./routes/CourseRoutes"));
app.use("/api/students",require("./routes/studentRoutes"));
app.get("/",(req,res)=>{
    res.send("Studnet API running");
})
app.listen(process.env.PORT,()=>
    console.log(`Server running on port ${process.env.PORT} `)
);