import "dotenv/config";
import express from "express";
import cors from "cors";
import patientsRoutes from "./routes/patients";
import staffRoutes from "./routes/staff";
import adminRoutes from "./routes/admin";
import doctorRoutes from "./routes/doctor";


import vkorc1Routes from "./routes/vkorc1";
import cyp3a5Routes from "./routes/cyp3a5";
import tpmtRoutes from "./routes/tpmt";
import cyp2c9Routes from "./routes/cyp2c9";
import hlabRoutes from "./routes/hlab";
import cyp2d6Routes from "./routes/cyp2d6";


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.ALLOW_ORIGIN || "http://localhost:3000" }));
app.use(express.json());

// ใช้ routes
app.use("/api/patients", patientsRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/doctor", doctorRoutes);


app.use("/api/vkorc1", vkorc1Routes);
app.use("/api/cyp3a5", cyp3a5Routes);
app.use("/api/tpmt", tpmtRoutes);
app.use("/api/cyp2c9", cyp2c9Routes);
app.use("/api/hlab", hlabRoutes);
app.use("/api/cyp2d6", cyp2d6Routes);

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
