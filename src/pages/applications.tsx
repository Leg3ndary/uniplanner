import DashLayout from "@/layouts/dashLayout";
import DashboardNavigation from "@/components/Navigation/DashboardNavigation";
import { FaPlus } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import type {
    InferGetServerSidePropsType,
    GetServerSidePropsContext,
} from "next";
import { Prisma, AppStatus, LimitType } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prisma";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrashCan } from "react-icons/fa6";
import { universities } from "@/data/universities";

export const getServerSideProps = async (
    context: GetServerSidePropsContext,
) => {
    const session = await getServerSession(
        context.req,
        context.res,
        authOptions,
    );

    if (!session) {
        return { props: { applications: [] } };
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email as string },
    });

    if (!user) {
        return { props: { applications: [] } };
    }

    const apps = await prisma.application.findMany({
        where: { userId: user.id },
    });

    return {
        props: {
            applications: apps as unknown as Prisma.ApplicationCreateInput[],
            user,
        },
    };
};

export default function Applications({
    applications,
    user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [createAppOpen, setCreateAppOpen] = useState(false);
    const [questions, setQuestions] = useState([{ question: "", answer: "" }]);
    const [extracurriculars, setExtracurriculars] = useState([
        { title: "", startDate: "", endDate: "", description: "" },
    ]);
    const createAppRef = useRef<HTMLDivElement>(null);

    async function createApplication(
        applicationData: Prisma.ApplicationCreateInput,
    ) {
        await fetch("/api/applications/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(applicationData),
        });
    }

    function clickOutCreateApp(e: MouseEvent) {
        if (
            createAppRef.current &&
            !createAppRef.current.contains(e.target as Node)
        ) {
            setCreateAppOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", clickOutCreateApp);
        return () => {
            document.removeEventListener("mousedown", clickOutCreateApp);
        };
    }, []);

    const handleQuestionChange = (
        index: number,
        field: string,
        value: string,
    ) => {
        const newQuestions = [...questions];
        newQuestions[index][field] = value;
        setQuestions(newQuestions);
    };

    const handleExtracurricularChange = (
        index: number,
        field: string,
        value: string,
    ) => {
        const newExtracurriculars = [...extracurriculars];
        newExtracurriculars[index][field] = value;
        setExtracurriculars(newExtracurriculars);
    };

    const addQuestion = () =>
        setQuestions([...questions, { question: "", answer: "" }]);
    const removeQuestion = (index: number) =>
        setQuestions(questions.filter((_, i) => i !== index));

    const addExtracurricular = () =>
        setExtracurriculars([
            ...extracurriculars,
            { title: "", startDate: "", endDate: "", description: "" },
        ]);
    const removeExtracurricular = (index: number) =>
        setExtracurriculars(extracurriculars.filter((_, i) => i !== index));

    return (
        <main className="flex w-full flex-col">
            <AnimatePresence>
                {createAppOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bg-[#00000080] h-screen w-screen z-50 flex p-16 px-32"
                    >
                        <div
                            className="relative m-auto h-auto w-full min-h-[700px] max-w-[1300px] bg-white p-3 rounded-xl"
                            ref={createAppRef}
                        >
                            <div className="absolute top-0 right-0 m-6 cursor-pointer">
                                <FaTrashCan
                                    onClick={() => setCreateAppOpen(false)}
                                    className="text-3xl text-red-500"
                                />
                            </div>
                            <h3 className="px-3">Create Application</h3>
                            <form
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    const formData = new FormData(
                                        e.currentTarget,
                                    );
                                    const applicationData: Prisma.ApplicationCreateInput =
                                        {
                                            university: formData.get(
                                                "university",
                                            ) as string,
                                            program: formData.get(
                                                "program",
                                            ) as string,
                                            status: formData.get(
                                                "status",
                                            ) as AppStatus,
                                            deadline: formData.get("deadline")
                                                ? new Date(
                                                      formData.get(
                                                          "deadline",
                                                      ) as string,
                                                  )
                                                : null,
                                            slug: `${formData.get("university")}-${formData.get("program")}`
                                                .toLowerCase()
                                                .replace(/ /g, "-"),
                                            user: user,
                                            questions: questions.map((q) => ({
                                                question: q.question,
                                                answer: q.answer,
                                                limitType: LimitType.None,
                                                completed: false,
                                            })),
                                            extracurriculars:
                                                extracurriculars.map((e) => ({
                                                    title: e.title,
                                                    startDate: new Date(
                                                        e.startDate,
                                                    ),
                                                    endDate: e.endDate
                                                        ? new Date(e.endDate)
                                                        : null,
                                                    description: e.description,
                                                    type: "Extracurricular",
                                                    reference: "",
                                                })),
                                        };
                                    await createApplication(applicationData);
                                    setCreateAppOpen(false);
                                }}
                                className="flex flex-col p-4 gap-4 h-max"
                            >
                                <div className="flex gap-4">
                                    <select
                                        className="p-2 bg-gray-100 border-2 rounded-lg flex-1"
                                        name="university"
                                    >
                                        {universities.map((uni) => (
                                            <option
                                                key={uni.name}
                                                value={uni.name}
                                            >
                                                {uni.name}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="text"
                                        name="program"
                                        id="program"
                                        placeholder="Program"
                                        className="py-2 px-4 bg-gray-100 border rounded-lg flex-2 hover:border-cyan-500"
                                    />
                                    <select
                                        className="p-2 bg-gray-100 border-2 rounded-lg"
                                        name="status"
                                    >
                                        {Object.keys(AppStatus).map(
                                            (status) => (
                                                <option
                                                    key={status}
                                                    value={status}
                                                >
                                                    {status}
                                                </option>
                                            ),
                                        )}
                                    </select>
                                    <input
                                        type="date"
                                        name="deadline"
                                        id="deadline"
                                        placeholder="Deadline"
                                        className="py-2 px-4 bg-gray-100 border rounded-lg focus:border-cyan-500"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="px-3">Questions</h4>
                                    {questions.map((question, index) => (
                                        <div key={index} className="flex gap-4">
                                            <input
                                                type="text"
                                                name={`question_${index}`}
                                                placeholder="Question"
                                                value={question.question}
                                                onChange={(e) =>
                                                    handleQuestionChange(
                                                        index,
                                                        "question",
                                                        e.target.value,
                                                    )
                                                }
                                                className="py-2 px-4 bg-gray-100 border rounded-lg flex-1"
                                            />
                                            <input
                                                type="text"
                                                name={`answer_${index}`}
                                                placeholder="Answer"
                                                value={question.answer}
                                                onChange={(e) =>
                                                    handleQuestionChange(
                                                        index,
                                                        "answer",
                                                        e.target.value,
                                                    )
                                                }
                                                className="py-2 px-4 bg-gray-100 border rounded-lg flex-1"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeQuestion(index)
                                                }
                                                className="py-2 px-4 bg-red-500 text-white rounded-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addQuestion}
                                        className="py-2 px-4 bg-blue-500 text-white rounded-lg"
                                    >
                                        Add Question
                                    </button>
                                    <h4 className="px-3">Extracurriculars</h4>
                                    {extracurriculars.map(
                                        (extracurricular, index) => (
                                            <div
                                                key={index}
                                                className="flex gap-4"
                                            >
                                                <input
                                                    type="text"
                                                    name={`extracurricular_title_${index}`}
                                                    placeholder="Title"
                                                    value={
                                                        extracurricular.title
                                                    }
                                                    onChange={(e) =>
                                                        handleExtracurricularChange(
                                                            index,
                                                            "title",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="py-2 px-4 bg-gray-100 border rounded-lg flex-1"
                                                />
                                                <input
                                                    type="date"
                                                    name={`extracurricular_startDate_${index}`}
                                                    placeholder="Start Date"
                                                    value={
                                                        extracurricular.startDate
                                                    }
                                                    onChange={(e) =>
                                                        handleExtracurricularChange(
                                                            index,
                                                            "startDate",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="py-2 px-4 bg-gray-100 border rounded-lg flex-1"
                                                />
                                                <input
                                                    type="date"
                                                    name={`extracurricular_endDate_${index}`}
                                                    placeholder="End Date"
                                                    value={
                                                        extracurricular.endDate
                                                    }
                                                    onChange={(e) =>
                                                        handleExtracurricularChange(
                                                            index,
                                                            "endDate",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="py-2 px-4 bg-gray-100 border rounded-lg flex-1"
                                                />
                                                <input
                                                    type="text"
                                                    name={`extracurricular_description_${index}`}
                                                    placeholder="Description"
                                                    value={
                                                        extracurricular.description
                                                    }
                                                    onChange={(e) =>
                                                        handleExtracurricularChange(
                                                            index,
                                                            "description",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="py-2 px-4 bg-gray-100 border rounded-lg flex-1"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeExtracurricular(
                                                            index,
                                                        )
                                                    }
                                                    className="py-2 px-4 bg-red-500 text-white rounded-lg"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ),
                                    )}
                                    <button
                                        type="button"
                                        onClick={addExtracurricular}
                                        className="py-2 px-4 bg-blue-500 text-white rounded-lg"
                                    >
                                        Add Extracurricular
                                    </button>
                                </div>
                                <button
                                    type="submit"
                                    className="py-2 px-4 bg-green-500 text-white rounded-lg mt-auto ml-auto"
                                >
                                    Create Application
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="h-48 bg-gradient-to-r from-green-500 to-cyan-500 w-full flex">
                <div className="relative w-64 mr-8">
                    <DashboardNavigation active="applications" />
                </div>
                <div className="flex-1 p-4">
                    <h1 className="text-white">Applications</h1>
                    <p className="text-white text-lg">
                        You have {applications.length} applications created.
                    </p>
                </div>
            </div>
            <div className="w-full flex">
                <div className="relative w-64" />
                <div className="flex-1 p-8 ml-4 grid grid-flow-row grid-cols-3 items-center justify-center gap-12">
                    {applications.map((app: Prisma.ApplicationCreateInput) => (
                        <div
                            key={app.slug}
                            className="flex justify-center mb-4 h-80 rounded-xl bg-white shadow-xl transition-all duration-800 ease-in-out cursor-pointer"
                        >
                            <div className="flex items-center h-12 m-4">
                                <h4 className="text-black mx-4 text-2xl">
                                    {app.university}
                                </h4>
                            </div>
                        </div>
                    ))}
                    <div
                        onClick={() => setCreateAppOpen(true)}
                        className="group flex items-center justify-center mb-4 border-4 h-80 border-gray-300 border-dashed bg-white rounded-xl hover:bg-gray-300 transition-all duration-800 ease-in-out cursor-pointer"
                    >
                        <FaPlus className="text-gray-300 group-hover:text-white duration-800 transition-all text-4xl" />
                        <h4 className="text-gray-300 group-hover:text-white duration-800 transition-all mx-4">
                            Add New
                        </h4>
                    </div>
                </div>
            </div>
        </main>
    );
}

Applications.getLayout = function getLayout(page: JSX.Element) {
    return <DashLayout>{page}</DashLayout>;
};
