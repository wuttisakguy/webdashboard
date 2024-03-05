import jwtHelper from "../helpers/jwtHelper";
import { Request, Response, NextFunction } from "express";

const bearerTokenVerify = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
          const bearerHeader = req.headers["authorization"];
          if(typeof bearerHeader !== "undefined" || bearerHeader !== undefined) {
               const bearer = bearerHeader.split(" ");
               const bearerToken = bearer[1];
               const tokenVerify = await jwtHelper.tokenVerify(bearerToken);
               if(tokenVerify === "expire") {
                    return res.status(409).send({ message: "Token is expired", status: 0 });
               } else if(tokenVerify === "cannot_verify") {
                    return res.status(403).send({ message: "User cannot authentication", status: 0 });
               } else {
                    res.locals.userData = tokenVerify;
                    res.locals.token = bearerToken;
                    next();
               }
          } else {
               return res.status(403).send({ message: "You not have access.", status: 0 })
          }
     } catch (err) {
          return res.status(500).send({ message: "Internal Server Error", status: 0 })
     }
}

export default bearerTokenVerify