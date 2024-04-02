import express from "express";
import customerRoutes from "./routes/customerRoute.js";

const app = express();

app.use(express.json());

app.use('/api', customerRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
})