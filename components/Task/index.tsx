import React from "react";
import { AiOutlineClose } from 'react-icons/ai';

interface ITask {
  title: string;
  description: string;
  id: number;
  deleteTask: (id: number) => void;
}

const Task: React.FC<ITask> = ({ title, description, id, deleteTask }) => {
  return (
    <div className="bg-zinc-600 p-4 rounded-md min-w-[300px] flex flex-col gap-2">
      <div className="text-white text-xl flex justify-between mb-1">
        <h1 className="text-justify">{title}</h1>
        <button onClick={() => deleteTask(id)}>
          <AiOutlineClose className="mt-1"/>
        </button>
      </div>
      <textarea disabled className="rounded-md disabled:bg-white p-2" defaultValue={description}/>
      <div className="flex mt-2 justify-between">
        <button onClick={() => alert("W.I.P!")} className="self-start border-2 px-2 py-1 rounded-md text-white hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-zinc-700 transition-all">
          Edit
        </button>
        <div className="flex gap-2 text-white items-center">
          <input type="checkbox" />
          Done
        </div>
      </div>
    </div>
  );
};

export default Task;
