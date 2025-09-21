import { Router } from "express";
import {getTPMT,getTPMTById,createTPMT,updateTPMTById,deleteTPMTById,}
from "../controllers/tpmt";

const router = Router();

router.get("/", getTPMT);
router.get("/:id", getTPMTById);
router.post("/", createTPMT);
router.put("/:id", updateTPMTById);
router.delete("/:id", deleteTPMTById);

export default router;
