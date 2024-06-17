import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
        const data = req.body;

        try {
            const newApplication = await prisma.application.create({
                data,
            });
            res.status(200).json(newApplication);
        } catch (error) {
            res.status(500).json({ error: "Error creating application" });
            console.log(error);
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
