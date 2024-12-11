import { Meteor } from "meteor/meteor";
import { TasksCollection } from "./TasksCollection";

// it can create globally and can be used anywhere around client and server
Meteor.methods({
    "tasks.insert"(doc) {
        return TasksCollection.insertAsync(doc);
    }
})