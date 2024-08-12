"use client";

import { createTask } from "@/utils/actions";
import { CreateTaskDTO } from "@/utils/Dto";
import { createTaskSchema } from "@/utils/validationSchemas";
import React from "react";
import { toast } from "react-toastify";

const FormAddTask = () => {
  const clientActions = async (formData: FormData) => {
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const validation = createTaskSchema.safeParse({ title, description });
    if (!validation.success) {
      return toast.error(validation.error.errors[0].message);
    }
    await createTask({ title, description } as CreateTaskDTO);
  };

  return (
    <form action={clientActions}>
      <div className="mb-6">
        <label className="block text-white font-medium mb-2" htmlFor="taskName">
          Task Name
        </label>
        <input
          type="text"
          name="title"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black bg-cyan-100 placeholder-gray-500"
          placeholder="Enter task name"
          required
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-white font-medium mb-2"
          htmlFor="taskDescription"
        >
          Task Description
        </label>
        <textarea
          name="description"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black bg-cyan-100 placeholder-gray-500"
          placeholder="Enter task description"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-500 text-white font-semibold py-3 rounded-lg hover:bg-cyan-600 transition duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default FormAddTask;
