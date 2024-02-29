import { useRef } from "react";
import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";

export default function AddProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const dialog = useRef();

  function handleNewProject() {
    const title = titleRef.current.value;
    const dueDate = dateRef.current.value;
    const description = descriptionRef.current.value;
    // Validation.
    if (
      title.trim() === "" ||
      dueDate.trim() === "" ||
      description.trim() === ""
    ) {
      dialog.current.open();
      return;
    }
    onAdd({
      title: title,
      dueDate: dueDate,
      description: description,
      tasks: [],
    });
  }
  function handleCancelProject() {
    onCancel();
  }
  return (
    <>
      <Modal ref={dialog}>
        <h2>Invalid Input</h2>
        <p className="text-stone-600 mb-4">All inputs must be filled.</p>
      </Modal>
      <article className="w-1/3 md:w-2/4 pt-5 pr-8 xl:pr-20">
        <h1 className="text-stone-700">New Project</h1>
        <menu className="flex items-center justify-end gap-2 mb-8 ">
          <li>
            <Button label="Save" handleClick={handleNewProject} />
          </li>
          <li>
            <Button label="Cancel" handleClick={handleCancelProject} />
          </li>
        </menu>
        <div className="flex flex-col justify-end gap-2">
          <Input
            className="w-100 px-2 py-1 rounded-sm bg-stone-200"
            type="text"
            label="Title"
            isTextAera={false}
            ref={titleRef}
            required
          />
          <Input
            className="w-100 px-2 py-1 rounded-sm bg-stone-200"
            type="date"
            label="Due Date"
            isTextAera={false}
            ref={dateRef}
            required
          />
          <Input
            className="w-100 px-2 py-1 rounded-sm bg-stone-200"
            label="Description"
            isTextAera={true}
            ref={descriptionRef}
            required
          />
        </div>
      </article>
    </>
  );
}
