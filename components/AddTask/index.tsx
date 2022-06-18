import React from "react";

interface IAddTask {
  title: string;
  description: string;
  handleSetTitle: (title: string) => void;
  handleSetDescription: (description: string) => void;
  handleAddTask: (title: string, description: string) => void;
}

const AddTask: React.FC<IAddTask> = ({
  handleAddTask,
  title,
  description,
  handleSetDescription,
  handleSetTitle,
}) => {
  return (
    <div className="flex flex-col gap-2 my-4 items-start">
      <h1 className="text-2xl text-white">Create task</h1>
      <input
        className="border-2 border-white p-2 min-w-[300px] rounded-md"
        type="text"
        required
        onChange={(e) => handleSetTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        className="border-2 border-white p-2 rounded-md min-w-[300px]"
        onChange={(e) => handleSetDescription(e.target.value)}
        placeholder="Description"
      />
      <button
        onClick={() => handleAddTask(title, description)}
        className="border-2 p-2 rounded-md text-white hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-zinc-700 transition-all"
      >
        Add task
      </button>
    </div>
  );
};

export default AddTask;
