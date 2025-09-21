import { Router } from "express";
import {getDoctors,getDoctorById,createDoctor,updateDoctorById,deleteDoctorById,getDoctorsWithStaff,}
from "../controllers/doctor";

const router = Router();

router.get("/", getDoctors);
router.get("/with-staff", getDoctorsWithStaff); // optional endpoint
router.get("/:id", getDoctorById);
router.post("/", createDoctor);
router.put("/:id", updateDoctorById);
router.delete("/:id", deleteDoctorById);

export default router;
