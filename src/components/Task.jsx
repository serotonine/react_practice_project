import Button from "./Button";
import { useState } from "react";

export default function Task({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setEnteredTask(event.target.value);
  }

  function addTask() {
    // Trigger Tasks.
    console.log("Task =>", enteredTask);
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <Button className="py-1" label="Save" handleClick={addTask} />
    </div>
  );
}
