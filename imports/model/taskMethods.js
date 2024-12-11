import { Meteor } from "meteor/meteor";
import { TasksCollection } from "./TasksCollection";

// it can create globally and can be used anywhere around client and server
Meteor.methods({
    // create a Docs newly based on the adddition of the tasklist
    "tasks.insert"(doc) {
        return TasksCollection.insertAsync(doc);
    },
    // update checked methods for a specific fields
    "tasks.toggleChecked"({ _id, isChecked}) {
        return TasksCollection.updateAsync(_id, {
            $set: { isChecked: !isChecked}
        })
    },
    // remove a single task from the list
    "tasks.deleteClicked"({ _id }) {
        return TasksCollection.removeAsync( { _id } );
    }
})