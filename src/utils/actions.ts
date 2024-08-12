"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { CreateTaskDTO } from "./Dto";
import { Status } from "@prisma/client";

// Server Action
export async function createTask({ title, description }: CreateTaskDTO) {
  if (typeof title !== "string" || title.length < 2) return;
  if (typeof description !== "string" || description.length < 2) return;

  try {

    await prisma.task.create({data:{title,description},});

  } catch (error) {
    throw new Error("could not create this task ,try again !")
  }
  revalidatePath("/");
  redirect("/");

}

// Server Action
export async function deleteTask(formData:FormData) {
 const id= formData.get("id")?.toString();
 if(!id) return

  try {

    await prisma.task.delete({where:{id :parseInt(id)}})

  } catch (error) {
    throw new Error("could not delete this task ,try again !")
  }
  revalidatePath("/");
  redirect("/");

}

// Server Action
export async function updateTask(formData: FormData) {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const status = formData.get("status") as Status;
  const id = formData.get("id")?.toString();

  if (typeof title !== 'string' || title.length < 2) return;
  if (typeof description !== 'string' || description.length < 4) return;
  if (!status) return;
  if (typeof id !== 'string') return;

  try {
      await prisma.task.update({
          where: { id: parseInt(id) },
          data: { title, description, status }
      });
  } catch (error) {
      throw new Error("could not update the task, please try again");
  }

  revalidatePath("/");
  revalidatePath(`/task/${id}`);
  redirect(`/task/${id}`);
}