import jwt from "jsonwebtoken";
const jwtKey: string = process.env.JWTKEY || "NULL";

const tokenVerify = async (
     token: string
) => {
     try {
          const response = jwt.verify(token, jwtKey);
          return response;
     } catch (err: any) {
          if(err.name === "TokenExpiredError") {
               return "expire";
          } else {
               return "cannot_verify";
          }
     }
};

const tokenGenerate = async (user: any) => {
     const payload = {
          user_id: user.user_id,
          username: user.username
     }

     const token = jwt.sign(payload, jwtKey, { expiresIn: '30d' });
     if(token) {
          return token;
     } else {
          return null;
     }
};

export default { tokenVerify, tokenGenerate }