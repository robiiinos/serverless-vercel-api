import { NowRequest, NowResponse } from "@vercel/node";
import { name, description, version } from "../package.json";

export default (req: NowRequest, res: NowResponse): void => {
  res.json({
    name,
    description,
    version,
  });
};
