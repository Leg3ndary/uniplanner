// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    success: boolean;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false });
    }

    // Create application

    res.status(200).json({ success: true });
}
