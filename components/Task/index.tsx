import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ITask {
  title: string;
  description: string;
  id: number;
  deleteTask: (id: number) => void;
}

const Task: React.FC<ITask> = ({ title, description, id, deleteTask }) => {
  const [done, setDone] = useState("no-underline")

  const styles = {
    done: "line-through",
    undone: "no-underline"
  }

  const setChecked = () => {
    setDone(done == styles.undone ? styles.done : styles.undone)
  }

  return (
    <div className="bg-cyan-600 p-4 rounded-md min-w-[300px] flex flex-col gap-2">
      <div className="text-white text-xl flex justify-between mb-1">
        <h1 className={done}>{title}</h1>
        <button onClick={() => deleteTask(id)}>
          <AiOutlineClose className="mt-1" />
        </button>
      </div>
      <textarea
        disabled
        className="rounded-md disabled:bg-white p-2"
        defaultValue={description}
      />
      <div className="flex mt-2 justify-between">
        <button
          onClick={() => alert("W.I.P!")}
          className="self-start border-2 px-2 py-1 rounded-md text-white hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-cyan-600 transition-all"
        >
          Edit
        </button>
        <div className="flex gap-2 text-white items-center">
          <input onChange={() => setChecked()} type="checkbox" />
          Done
        </div>
      </div>
    </div>
  );
};

export default Task;
