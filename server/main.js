import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../imports/model/TasksCollection';
import "../imports/model/TasksPublications";
import "../imports/model/taskMethods";

const insertTasks = (taskText) => {
  return TasksCollection.insertAsync({ text: taskText, createdAt: Date.now()});
}

Meteor.startup(async () => {
  if ((await TasksCollection.find().countAsync()) === 0) {
    ["one", "two", "Three", "Four", "Five", "Six", "seven", "eights"].forEach(insertTasks);
  }
  const result = await TasksCollection.find({}).fetchAsync();
  return result;
});