import React, { useState } from "react"

const TaskForm = () => {
    const [ text, setText ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!text) return;

        await Meteor.callAsync("tasks.insert", {
            text: text.trim(),
            createdAt: Date.now()
        })

        setText("");
    }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type to add a new task"/>
        <button type="submit" >Add Taks</button>
    </form>
  )
}

export default TaskForm