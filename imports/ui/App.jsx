import React from "react";
import { useTracker, useSubscribe } from 'meteor/react-meteor-data';
import { TasksCollection } from "../model/TasksCollection";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useState } from 'react';


export const App = () => {
  const [ hideCompleted, setHideCompleted ] = useState(false);
  const hideCompletedFilter = { isChecked : { $ne : true }};
  const isLoading = useSubscribe('tasks');// subscribing from the server for true data
  const tasks = useTracker(() => TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, { sort: { createdAt: -1 } }).fetch());
  const pendingTasksCount = useTracker(() => TasksCollection.find(hideCompletedFilter).count());

  const handleCheckBoxClick = (_id, isChecked) => {
    Meteor.callAsync("tasks.toggleChecked", { _id, isChecked })
  }

  const handleDeleteClick = (_id) => {
    Meteor.callAsync("tasks.deleteClicked", { _id });
  }

  if (isLoading()) {
    return <div>Loading....</div>
  }

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>Todoist {pendingTasksCount}</h1>

          </div>
        </div>
      </header>

      <div className="main">
        <TaskForm />
        <div className="filter">
          <button onClick={() => setHideCompleted(!hideCompleted)}>
            {hideCompleted ? 'Show All' : 'Hide Completed'}
          </button>
        </div>

        <ul className="tasks">
          {tasks.map(task =>
            <Task
              key={task._id}
              task={task}
              onCheckboxClick={handleCheckBoxClick}
              onDeleteClick={handleDeleteClick}
            />
          )}
        </ul>
      </div>
    </div>
  )
}


