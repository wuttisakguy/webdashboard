import { Router } from "express";
import bearerTokenVerify from "../../shared/middlewares/authentication";
import adminControllers from "../controllers/admin.controllers";

const router = Router();

router.post("/admin/generatetoken", bearerTokenVerify, adminControllers.generateToken);
router.get("/admin/movies/admin", bearerTokenVerify, adminControllers.getAdminMovies);
router.post("/admin/movie", bearerTokenVerify, adminControllers.createMovie);
router.patch("/admin/movie", bearerTokenVerify, adminControllers.updateMovie);

export default router;