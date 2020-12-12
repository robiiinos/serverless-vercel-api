import { NowRequest, NowResponse } from "@vercel/node";
import { version } from "../package.json";

export default (req: NowRequest, res: NowResponse): void => {
  res.json({
    name: "serverless-vercel-api",
    description: "Serverless API Template, for Vercel hosting.",
    version,
  });
};
