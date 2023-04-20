import { Router } from "express";
import { postNot, getNot, getNots, updateNot, deleteNot, getNotsOfUser } from "../controllers/notifications";

const router = Router();

router.get("/all", getNots);
router.get("/:idNot", getNot);
router.post("/", postNot);
router.put("/:idNot", updateNot);
router.delete("/:idNot", deleteNot);
router.get("/rec/:idRec", getNotsOfUser);

export {router};