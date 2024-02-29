import Button from "./Button";
import Task from "./Task";
import { useState } from "react";
export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  function addTask(task) {
    // Trigger Project.
    console.log("Tasks =>", task);
    onAddTask(task);
  }
  function deleteTask(id) {
    onDeleteTask(id);
  }
  return (
    <section>
      <header className="flex items-center justify-between">
        <h2 className="text-stone-700">Tasks</h2>
      </header>

      <Task onAdd={addTask} />
      {tasks.length === 0 && (
        <p className="text-stone-600 mt-4">
          This project does not have yet tasks.
        </p>
      )}

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between my-4">
            <span>{task.text}</span>
            <button
              className="text-stone-700 hover:text-red-500"
              onClick={() => deleteTask(task.id)}
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
