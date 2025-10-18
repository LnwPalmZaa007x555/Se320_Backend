import "dotenv/config";
import express from "express";
import cors from "cors";
import patientsRoutes from "./routes/user/patients";
import staffRoutes from "./routes/user/staff";
import adminRoutes from "./routes/user/admin";
import doctorRoutes from "./routes/user/doctor";
import medtechRoutes from "./routes/user/medtech";
import pharmacistRoutes from "./routes/user/pharmacist";

import vkorc1Routes from "./routes/gene/vkorc1";
import cyp3a5Routes from "./routes/gene/cyp3a5";
import tpmtRoutes from "./routes/gene/tpmt";
import cyp2c9Routes from "./schemas/gene/cyp2c9";
import hlabRoutes from "./routes/gene/hlab";
import cyp2d6Routes from "./routes/gene/cyp2d6";

//auth
import authRoutes from "./routes/auth";
import { auth } from "./middlewares/auth";
import { requireRole } from "./middlewares/requireRole";


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.ALLOW_ORIGIN || "http://localhost:3000" }));
app.use(express.json());

// ../user
app.use("/api/patients", patientsRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/medtech", medtechRoutes);
app.use("/api/phamacist", pharmacistRoutes);

// ../gene
app.use("/api/vkorc1", vkorc1Routes);
app.use("/api/cyp3a5", cyp3a5Routes);
app.use("/api/tpmt", tpmtRoutes);
app.use("/api/cyp2c9", cyp2c9Routes);
app.use("/api/hlab", hlabRoutes);
app.use("/api/cyp2d6", cyp2d6Routes);

//auth
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
