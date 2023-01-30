import type { VercelRequest, VercelResponse } from "@vercel/node";

const handler = (req: VercelRequest, res: VercelResponse): VercelResponse => {
  if (req.method?.toUpperCase() === "OPTIONS") {
    return res.status(204).end();
  }

  const time = Math.floor(Date.now() / 1000);

  return res.status(200).json({
    success: true,
    error: null,
    data: {
      time,
    },
  });
};

export default handler;
