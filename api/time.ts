import type { VercelRequest, VercelResponse } from "@vercel/node";

export default (_: VercelRequest, res: VercelResponse): void => {
  const time = new Date().getTime();

  res.json({ time });
};
