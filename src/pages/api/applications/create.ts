import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prisma";
import { AppStatus } from "@prisma/client";

type Data = {
    success: boolean;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false });
    }

    const session = await getServerSession(req, res, authOptions);

    if (!session) {
        return res.status(401).json({ success: false });
    }

    const { body } = req;
    const appDeadline = new Date(body.deadline as string);

    await prisma.application.create({
        data: {
            slug: "test-slug" + Math.random(),
            // title: body.title as string,
            questions: [],
            extracurriculars: [],
            awards: [],
            deadline: appDeadline,
            university: "test",
            program: "testing",
            status: AppStatus.Incomplete,
            user: {
                connectOrCreate: {
                    where: {
                        email: session.user.email as string,
                    },
                    create: {
                        email: session.user.email as string,
                        name: session.user.name as string,
                        grades: [],
                    },
                },
            },
        },
    });

    res.status(200).json({ success: true });
}
