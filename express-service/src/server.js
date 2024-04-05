import express from "express";
import cors from "cors";
import customerRoutes from "./routes/customerRoute.js";

const app = express();

app.use(express.json());
app.use(cors())
app.use('/api', customerRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
})