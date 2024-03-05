import { Request, Response } from "express";
import getErrorHandling from "../../shared/helpers/handleError";

const generateToken = async (
     req: Request,
     res: Response
) => {
     const { token, domain_name } = req.body
          
     try {

     } catch (err) {
          return res.status(500).send({ message: getErrorHandling(err) })
     }
}

const getAdminMovies = async (req: Request, res: Response) => {
     try {
     } catch (err) {
       return res.status(500).send({ message: getErrorHandling(err) });
     }
   };
   
   const createMovie = async (req: Request, res: Response) => {
     try {
     } catch (err) {
       return res.status(500).send({ message: getErrorHandling(err) });
     }
   };
   
   const updateMovie = async (req: Request, res: Response) => {
     try {
     } catch (err) {
       let message = getErrorHandling(err);
       return res.status(500).send({ message });
     }
   };

export default { generateToken, getAdminMovies, createMovie, updateMovie }