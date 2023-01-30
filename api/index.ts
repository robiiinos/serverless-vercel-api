import type { VercelRequest, VercelResponse } from "@vercel/node";
import { name, description, version } from "../package.json";

const handler = (req: VercelRequest, res: VercelResponse): VercelResponse => {
  if (req.method?.toUpperCase() === "OPTIONS") {
    return res.status(204).end();
  }

  return res.status(200).json({
    success: true,
    error: null,
    data: {
      name,
      description,
      version,
    },
  });
};

export default handler;
