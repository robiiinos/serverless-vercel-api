import type { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse): void => {
  const time = new Date().getTime();

  res.json({ time });
};
