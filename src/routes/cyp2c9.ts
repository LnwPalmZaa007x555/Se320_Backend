import { Router } from "express";
import {getCYP2C9,getCYP2C9ById,createCYP2C9,updateCYP2C9ById,deleteCYP2C9ById,}
from "../controllers/cyp2c9";

const router = Router();

router.get("/", getCYP2C9);
router.get("/:id", getCYP2C9ById);
router.post("/", createCYP2C9);
router.put("/:id", updateCYP2C9ById);
router.delete("/:id", deleteCYP2C9ById);

export default router;
