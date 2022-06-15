import React from "react";

interface ITask {
  title: string;
  description: string;
  id: number;
  deleteTask: (id: number) => void;
}

const Task: React.FC<ITask> = ({ title, description, id, deleteTask }) => {
  return (
    <div className="bg-zinc-600 p-4 rounded-md min-w-[300px] flex flex-col gap-2">
      <div className="bg-white rounded-md p-2">
        <h1>{title}</h1>
      </div>
      <div className="bg-white rounded-md p-2">
        <h1>{description}</h1>
      </div>
      <div className="flex justify-between">
        <button onClick={() => deleteTask(id)} className="self-start border-2 p-2 rounded-md text-white hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-zinc-700 transition-all">
          Deletar
        </button>
        <div className="flex gap-2 text-white items-center">
          <input className="mt-1" type="checkbox" />
          Feito
        </div>
      </div>
    </div>
  );
};

export default Task;
