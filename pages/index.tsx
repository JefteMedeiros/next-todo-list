import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddTask from "../components/AddTask";
import Layout from "../components/Layout";
import Task from "../components/Task/index";

interface ITask {
  id: number;
  taskTitle: string;
  taskDescription: string;
}

const Home: React.FC = () => {
  const [title, handleSetTitle] = useState("");
  const [description, handleSetDescription] = useState("");

  const [search, setSearch] = useState("");

  const [task, handleSetTask] = useState<ITask[]>([]);

  const handleAddTask = (taskTitle: string, taskDescription: string) => {
    const randomId = Math.ceil(Math.random() * 99999);

    taskTitle = title;
    taskDescription = description;

    const taskOject: ITask = {
      id: randomId,
      taskTitle: taskTitle,
      taskDescription: taskDescription,
    };

    !taskTitle || !taskDescription
      ? toast('Error! Fill in all the fields.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      : handleSetTask([...task, taskOject]);
  };

  const deleteTask = (id: number) => {
    handleSetTask(task.filter((e) => e.id !== id));
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="flex items-center relative pl-3 my-4 rounded-md bg-white w-[300px]">
        <AiOutlineSearch className="absolute right-2 text-zinc-700"/> 
        <input className="outline-none my-2 w-[260px]" placeholder="Filtrar" type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <AddTask
        title={title}
        description={description}
        handleSetDescription={handleSetDescription}
        handleSetTitle={handleSetTitle}
        handleAddTask={handleAddTask}
      />
      {task.filter(e => !task || (e.taskDescription.split('')).some((e) => search.split('').includes(e))).map((e, key) => {
        return (
          <div key={key}>
            <div className="my-3 flex flex-col">
              <Task
                id={e.id}
                deleteTask={deleteTask}
                title={e.taskTitle}
                description={e.taskDescription}
              />
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Home;
