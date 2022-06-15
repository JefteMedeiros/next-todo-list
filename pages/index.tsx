import React, { useState } from "react";
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
      ? toast.error('Error! Fill in all the fields.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      : handleSetTask([...task, taskOject]);
  };

  const deleteTask = (id: number) => {
    handleSetTask(task.filter((e) => e.id !== id));
  };

  return (
    <Layout>
      <ToastContainer />
      <AddTask
        title={title}
        description={description}
        handleSetDescription={handleSetDescription}
        handleSetTitle={handleSetTitle}
        handleAddTask={handleAddTask}
      />
      {task.map((e, key) => {
        return (
          <div className="my-3 flex flex-col" key={key}>
            <Task
              id={e.id}
              deleteTask={deleteTask}
              title={e.taskTitle}
              description={e.taskDescription}
            />
          </div>
        );
      })}
    </Layout>
  );
};

export default Home;
