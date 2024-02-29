import getProject from "../assets/Utils";
import Tasks from "./Tasks";
import Button from "./Button";

export default function Project({
  projects,
  onDelete,
  onAddTask,
  onDeleteTask,
}) {
  // PROJECT //
  if (!projects.selectedProjectId) {
    return <p className="font-bold text-red-800">No project selected</p>;
  }
  // Return selected project.
  const project = getProject(projects);
  const formattedDate = new Date(project.dueDate).toLocaleDateString("fr-BE", {
    year: "2-digit",
    day: "2-digit",
    month: "2-digit",
  });
  function handleDeleteProject() {
    onDelete();
  }
  // TASKS //
  function addTask(task) {
    // Trigger App
    onAddTask(task);
  }
  function deleteTask(id) {
    onDeleteTask(id);
  }
  // MARKUP //
  return (
    <article className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-stone-600">{project.title}</h1>
          <Button label="Delete" handleClick={handleDeleteProject} />
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <main>
        <Tasks
          tasks={project.tasks}
          onAddTask={addTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </article>
  );
}
