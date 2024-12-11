import React from "react";
import { useTracker, useSubscribe } from 'meteor/react-meteor-data';
import { TasksCollection } from "../model/TasksCollection";
import TaskForm from "./TaskForm";
import Task from "./Task";


export const App =  () => {
  const isLoading = useSubscribe('tasks');// subscribing from the server for true data
  const tasks =  useTracker( () =>  TasksCollection.find({}, {sort : { createdAt: -1}}).fetch());
  console.log(tasks);

  if(isLoading()) {
    return <div>Loading....</div>
  }

  return (
  <div>
    <h1>Welcome to Meteor!</h1>

    <TaskForm />

    <ul>
      {tasks.map(task => <Task key={task._id} task={task}/> )}
    </ul>
  </div>
  )
 }


