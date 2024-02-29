export default function getProject(projects) {
  if (!projects.selectedProjectId) {
    return undefined;
  }
  return projects.projects.find((el) => el.id === projects.selectedProjectId);
}
