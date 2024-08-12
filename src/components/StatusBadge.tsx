import React from "react";
import { Status } from "@prisma/client";

interface StautsPropsI {
  status: Status;
}
const StatusBadge = ({ status }: StautsPropsI) => {
  const statusColor =
    status === Status.TODO
      ? `bg-rose-400 text-rose-950`
      : status === Status.IN_PROGRESS
      ? `bg-yellow-400 text-yellow-950`
      : `bg-green-400 text-green-950`;
  return  (
 
    <div className={`${statusColor} py-1 px-2 w-min rounded-sm font-semibold`}>{status.toString()}</div>
  )

};

export default StatusBadge;
