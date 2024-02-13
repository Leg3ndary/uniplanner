import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type Data = {
    applications: Prisma.ApplicationCreateInput[] | null;
};

type Error = {
    success: boolean;
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>,
) {
    if (req.method !== "GET") {
        return res
            .status(405)
            .json({ success: false, message: "Method not allowed" });
    }

    const session = await getServerSession(req, res, authOptions);
    console.log(session);

    if (!session) {
        return res
            .status(401)
            .json({ success: false, message: "Unauthorized" });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email as string,
        },
    });

    if (!user) {
        return res.status(200).json({ applications: [] });
    }

    const applications = await prisma.application.findMany({
        where: {
            userId: user.id,
        },
    });

    const mappedApplications = applications.map((application) => ({
        ...application,
        user: { connect: { id: user.id } },
    }));

    res.status(200).json({ applications: mappedApplications });
}
