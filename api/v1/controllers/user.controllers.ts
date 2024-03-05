import { Request, Response } from "express";
import getErrorHandling from "../../shared/helpers/handleError";

const getMe = async (
     req: Request,
     res: Response
) => {
     
}

const userLogin = async (
     req: Request,
     res: Response
) => {
     const { username, password } = req.body

     try {
          
     } catch (err) {
          let message = getErrorHandling(err);
          return res.status(500).send({ message })
     }
}

const userRegister = async (
     req: Request,
     res: Response
) => {
     const { username, password } = req.body
}

export default { getMe, userLogin, userRegister }