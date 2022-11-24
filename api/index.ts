import type { VercelRequest, VercelResponse } from "@vercel/node";
import { name, description, version } from "../package.json";

export default (_: VercelRequest, res: VercelResponse): void => {
  res.json({
    name,
    description,
    version,
  });
};
