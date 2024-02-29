import SideBar from "./components/SideBar";
import NoProject from "./components/NoProject";
import AddProject from "./components/AddProject";
import Project from "./components/Project";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  const [componentDisplay, setComponentDisplay] = useState(0);
  // FUNCTIONS
  function handleAddProjectDisplay() {
    setComponentDisplay(1);
  }
  // Add new project.
  function handleAddProject(projectDatas) {
    if (componentDisplay === 0) {
      return;
    }
    const projectId = Math.random();
    setProjectsState((prevProjectsState) => {
      const newProject = {
        ...projectDatas,
        id: projectId,
      };
      return {
        ...prevProjectsState,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
    handleSelectedProject(projectId);
    setComponentDisplay(2);
  }
  // Cancel new project.
  function cancelAddProject() {
    setComponentDisplay(0);
  }
  // Display selected Project.
  function handleSelectedProject(id) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: id,
      };
    });
    setComponentDisplay(2);
  }

  // Delete Project.
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
    setComponentDisplay(0);
  }
  // Add Task to current project.
  function handleAddTask(task) {
    const newTask = {
      id: Math.random(),
      text: task,
    };
    const newProjects = projectsState.projects.map((project) => {
      project.id === projectsState.selectedProjectId &&
        project.tasks.push(newTask);
      return project;
    });
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: newProjects,
      };
    });
  }
  // Delete task from current project.
  function handleDeleteTask(id) {
    const newProjects = projectsState.projects.map((project) => {
      if (project.id === projectsState.selectedProjectId) {
        project.tasks = project.tasks.filter((task) => task.id !== id);
      }
      return project;
    });
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: newProjects,
      };
    });
  }
  // Markup.
  return (
    <>
      <main className="flex gap-8">
        <SideBar
          title="Your projects"
          selectedId={projectsState.selectedProjectId}
          projects={projectsState.projects}
          onSelectProject={handleSelectedProject}
          onAddProject={handleAddProjectDisplay}
        />
        {componentDisplay === 0 && (
          <NoProject handleClick={handleAddProjectDisplay} />
        )}
        {componentDisplay === 1 && (
          <AddProject onAdd={handleAddProject} onCancel={cancelAddProject} />
        )}
        {componentDisplay === 2 && (
          <Project
            projects={projectsState}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
          />
        )}
      </main>
    </>
  );
}

export default App;
