import { Router } from "express";
import {getCYP2D6,getCYP2D6ById,createCYP2D6,updateCYP2D6ById,deleteCYP2D6ById,}
from "../controllers/cyp2d6";

const router = Router();

router.get("/", getCYP2D6);
router.get("/:id", getCYP2D6ById);
router.post("/", createCYP2D6);
router.put("/:id", updateCYP2D6ById);
router.delete("/:id", deleteCYP2D6ById);

export default router;
