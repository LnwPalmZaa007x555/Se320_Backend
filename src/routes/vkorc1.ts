import { Router } from "express";
import {getVKORC1,getVKORC1ById,createVKORC1,updateVKORC1ById,deleteVKORC1ById,} 
from "../controllers/vkorc1";

const router = Router();

router.get("/", getVKORC1);
router.get("/:id", getVKORC1ById);
router.post("/", createVKORC1);
router.put("/:id", updateVKORC1ById);
router.delete("/:id", deleteVKORC1ById);

export default router;
