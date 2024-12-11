import { Meteor } from 'meteor/meteor';
import { TasksCollection } from './TasksCollection';

//publishing for the client
Meteor.publish('tasks', () => {
    return TasksCollection.find();
})