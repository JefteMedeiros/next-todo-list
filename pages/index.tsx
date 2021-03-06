import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTask from "../components/AddTask";
import Layout from "../components/Layout";
import SearchTask from "../components/SearchTask";
import TasksComponent from "../components/TasksComponent";

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
      ? toast("Error! Fill in all the fields.", {
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
    handleSetTitle("");
    handleSetDescription("");
  };

  const deleteTask = (id: number) => {
    handleSetTask(task.filter((e) => e.id !== id));
  };

  const searchTask = (title: string, search: string) => {
    const titleLower = title.toLowerCase();
    const searchLower = search.toLowerCase();
    return searchLower.includes(titleLower);
  };

  return (
    <Layout>
      <ToastContainer />
      <SearchTask setSearch={setSearch} />
      <AddTask
        title={title}
        description={description}
        handleSetDescription={handleSetDescription}
        handleSetTitle={handleSetTitle}
        handleAddTask={handleAddTask}
      />
      <TasksComponent
        task={task}
        search={search}
        searchTask={searchTask}
        deleteTask={deleteTask}
      />
    </Layout>
  );
};

export default Home;
