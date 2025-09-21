import { Router } from "express";
import {getHLAB,getHLABById,createHLAB,updateHLABById,deleteHLABById,}
from "../controllers/hlab";

const router = Router();

router.get("/", getHLAB);
router.get("/:id", getHLABById);
router.post("/", createHLAB);
router.put("/:id", updateHLABById);
router.delete("/:id", deleteHLABById);

export default router;
