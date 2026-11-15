import express from "express";
import { MenuController } from "../controllers/menuController.js";

const router = express.Router();

router.get("/", MenuController.getAll);
router.get("/:id", MenuController.getById);
router.post("/", MenuController.create);
router.put("/:id", MenuController.update);
router.delete("/:id", MenuController.remove);

export default router;