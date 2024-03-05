import { Router } from "express";
import userControllers from "../controllers/user.controllers";
import bearerTokenVerify from "../../shared/middlewares/authentication";

const router = Router();

router.get("/user/me", bearerTokenVerify, userControllers.getMe);
router.post("/user/login", userControllers.userLogin);
router.post("/user/register", userControllers.userRegister);

export default router;