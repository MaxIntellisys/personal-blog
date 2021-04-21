import { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/data";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ data });
};
