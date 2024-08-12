import React from "react";
import Link from "next/link";
 
import FormAddTask from "@/components/FormAddTask";
 



const AddTaskPage = () => {
  return (
    <>
    <Link className="underline block mb-10" href={`/`}>
    {"<< "} Back to task details
</Link>
    <div className="md:w-2/3 w-full mx-auto rounded-md p-5 bg-slate-800 border-2 border-gray-300">

      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Add New Task
      </h2>
      <FormAddTask/>
  

     
    </div>
    </>
  );
};

export default AddTaskPage;
