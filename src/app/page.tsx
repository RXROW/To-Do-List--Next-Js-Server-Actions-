import StatusBadge from "@/components/StatusBadge";
import prisma from "@/utils/db";
import Link from "next/link";

const HomePage =async () => {
  const taskes = await prisma.task.findMany();

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-6xl font-semibold my-10">Tasks List App</h1>
      <div className="flex justify-center">
        <Link
          href="/task/add"
          className="bg-cyan-300 hover:bg-cyan-400 transition-colors text-black py-3 px-6 text-2xl font-semibold rounded"
        >
          Add Task
        </Link>
      </div>
      <table className="table w-full text-left mt-5 ">
        <thead className=" border-t-2 border-b-2 border-gray-200 text-xl">
          <tr>
            <th className="p-3">#</th>
           <th>Task Title</th>
           <th>Task Status</th>
           <th>Task Detials</th>
         

          </tr>

        </thead>
        <tbody>
          {taskes.map((task ,index)=>
          <tr key={task.id} className=" border-b border-gray-500">
            <td className="p-3">{index +1}</td>
            <td >{task.title}</td>
            <td >
              
               <StatusBadge status={task.status}/>

            </td>
            
            <td >
              <Link className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-sm transition-all" href={`/task/${task.id}`}>Details</Link>
            </td>

          </tr>
     
          )}

        </tbody>

      </table>
    </section>
  );
};

export default HomePage;
