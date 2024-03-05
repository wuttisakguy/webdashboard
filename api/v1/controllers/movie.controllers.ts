import { Request, Response } from "express";
import MovieServices from "../services/movie.service";
import getErrorHandling from "../../shared/helpers/handleError";

const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await MovieServices.getMovies();
    if (movies.length > 0) {
      return res
        .status(200)
        .send({ message: "พบรายการหนัง", response: movies });
    } else {
      return res.status(404).send({ message: "ไม่พบรายการหนังใดๆ" });
    }
  } catch (err) {
    return res.status(500).send({ message: getErrorHandling(err) });
  }
};



export default { getMovies };
