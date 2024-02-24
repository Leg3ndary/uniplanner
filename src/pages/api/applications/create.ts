import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prisma";

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

    // test create application in db

    await prisma.application.create({
        data: {
            slug: "test-slug" + Math.random(),
            title: "Test Application",
            questions: [],
            extracurriculars: [],
            awards: [],
            deadline: null,
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
