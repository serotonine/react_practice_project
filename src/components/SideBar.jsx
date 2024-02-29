export default function SideBar({
  title,
  selectedId,
  projects,
  onSelectProject,
  onAddProject,
}) {
  function handleClick(id) {
    onSelectProject(id);
  }
  function addProject() {
    onAddProject();
  }
  return (
    <aside className="w-1/3 md:w-1/4 bg-black h-screen  text-white pl-8 py-5 ">
      <header className="mb-8">
        <h2 className="uppercase">{title}</h2>
        <button
          onClick={addProject}
          className="block p-4 bg-slate-600 text-white rounded-md opacity-80 hover:opacity-100 focus:opacity-100"
        >
          + Add Project
        </button>
      </header>
      <main className="w-3/4">
        {projects.map((project) => {
          const classes =
            project.id === selectedId
              ? "text-white mb-4"
              : "text-slate-200 cursor-pointer hover:text-white hover:underline mb-4";
          return (
            <p
              key={project.id}
              className={classes}
              onClick={() => handleClick(project.id)}
            >
              {project.title}
            </p>
          );
        })}
      </main>
    </aside>
  );
}
