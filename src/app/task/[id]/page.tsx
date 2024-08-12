import prisma from "@/utils/db";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { notFound } from "next/navigation";
import { deleteTask } from "@/utils/actions";

interface TaskDetailsPageProps {
    params: { id: string }
}

const TaskDetailsPage = async ({ params }: TaskDetailsPageProps) => {
    const taskId = parseInt(params.id);

    // Fetch the task details from the database
    const task = await prisma.task.findUnique({
        where: { id: taskId }
    });

    // If the task is not found, redirect to the 404 page
    if (!task) notFound();

    return (
        <section>
            <div className="flex items-center justify-between flex-wrap gap-5">
                <Link href="/" className="underline">
                    {"<< "} Back to tasks table
                </Link>
                <div className="flex items-center">
                    <Link
                        href={`/task/${task.id}/edit`}
                        className="bg-blue-700 hover:bg-blue-600 transition-colors rounded-sm py-1 px-2 me-3 text-xl"
                    >
                        Edit
                    </Link>
                 
                    <form action={deleteTask}>
                        <input type="hidden" name="id" value={task.id} />
                        <button type="submit" className="bg-rose-700 hover:bg-rose-600 transition-colors rounded-lg py-1 px-2 text-xl">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-16 p-5 rounded-lg bg-gray-800">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-3xl">{task.title}</h2>
                    <StatusBadge status={task.status} />
                </div>
                <small className="text-yellow-400">
                    {new Date(task.createdAt).toDateString()}
                </small>
                <p className="mt-5 text-xl">{task.description}</p>
            </div>
        </section>
    );
}

export default TaskDetailsPage;
