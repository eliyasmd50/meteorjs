import React from "react";
import Task from "./Task";


export const App = () => {
  let tasks = [
    { "_id": 1, "text": "First text"},
    { "_id": 2, "text": "Second text"},
    { "_id": 3, "text": "third text"},
  ]
  return (
  <div>
    <h1>Welcome to Meteor!</h1>
    <ul>
      {tasks.map(task => <Task key={task._id} task={task}/> )}
    </ul>
  </div>
  )
 }


