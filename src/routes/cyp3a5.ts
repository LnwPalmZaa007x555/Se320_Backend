import { Router } from "express";
import {getCYP3A5,getCYP3A5ById,createCYP3A5,updateCYP3A5ById,deleteCYP3A5ById,} 
from "../controllers/cyp3a5";

const router = Router();

router.get("/", getCYP3A5);
router.get("/:id", getCYP3A5ById);
router.post("/", createCYP3A5);
router.put("/:id", updateCYP3A5ById);
router.delete("/:id", deleteCYP3A5ById);

export default router;
