// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  usage: number;
  image: string;
};
type Response = {
  data: Data[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const data = [
    {
      name: "Chrome",
      usage: 0.63,
      image: "https://pagecdn.io/lib/browser-logos/chrome.png",
    },
    {
      name: "Edge",
      usage: 0.04,
      image: "https://pagecdn.io/lib/browser-logos/edge.png",
    },
    {
      name: "Firefox",
      usage: 0.04,
      image: "https://pagecdn.io/lib/browser-logos/firefox.png",
    },
    {
      name: "Opera",
      usage: 0.02,
      image: "https://pagecdn.io/lib/browser-logos/opera.png",
    },
    {
      name: "Safari",
      usage: 0.19,
      image: "https://pagecdn.io/lib/browser-logos/safari.png",
    },
  ];
  res.status(200).json({ data });
}
