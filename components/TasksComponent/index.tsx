import React from 'react';
import Task from '../Task';

interface ITask {
  id: number;
  taskTitle: string;
  taskDescription: string;
}

interface IProps {
  task: ITask[],
  search: string,
  searchTask:(title: string, searcb: string) => boolean
  deleteTask:(id: number) => void;
}

const TasksComponent: React.FC<IProps> = ({task, search, searchTask, deleteTask}) => {
  return (
    <>
      {task.filter((e) => !search || searchTask(e.taskTitle, search)).map((e, key) => {
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
    </>
  );
}

export default TasksComponent;