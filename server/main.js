import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../imports/model/TasksCollection';

const insertTasks = (taskText) => {
  return TasksCollection.insertAsync({ text: taskText, createdAt: Date.now()});
}

Meteor.startup(async () => {
  if ((await TasksCollection.find().countAsync()) === 0) {
    ["one", "two", "Three", "Four", "Five", "Six"].forEach(insertTasks);
  }
  const result = await TasksCollection.find().fetchAsync();
  console.log(result);
  return result;
});