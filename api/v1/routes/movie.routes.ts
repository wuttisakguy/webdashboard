import { Router } from "express";
import movieController from "../controllers/movie.controllers";
import bearerTokenVerify from "../../shared/middlewares/authentication";

const router = Router();

router.get("/movies", movieController.getMovies);

export default router;
