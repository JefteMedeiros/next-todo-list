import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

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
  const buttonStyles = {
    normal: "rotate-360 transition-all",
    flipped: "rotate-180 transition-all",
  };

  const createTaskStyles = {
    normal: "flex flex-col gap-2 items-start rotate-360 transition-all z-9999",
    hidden:
      "hidden opacity-0 transition-all mb-[-172px]",
  };

  const [buttonStyle, setButtonStyle] = useState(buttonStyles.normal);
  const [containerStyle, setContainerStyle] = useState(createTaskStyles.normal);

  const handleSetShow = () => {
    setButtonStyle(
      buttonStyle == buttonStyles.normal
        ? buttonStyles.flipped
        : buttonStyles.normal
    );
    setContainerStyle(
      containerStyle == createTaskStyles.normal
        ? createTaskStyles.hidden
        : createTaskStyles.normal
    );
  };

  return (
    <div className="flex flex-col w-[300px] gap-2 my-1">
      <div className="flex gap-2 items-center text-2xl text-white">
        Create task
        <button onClick={() => handleSetShow()}>
          <BsChevronDown className={buttonStyle} />
        </button>
      </div>
      <div className={containerStyle}>
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
    </div>
  );
};

export default AddTask;
