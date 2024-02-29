import NoProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({ handleClick }) {
  return (
    <article className="text-center w-2/3 md:w-3/4 pt-8 pr-8 xl:pr-20">
      <h2 className="text-xl font-bold text-stone-700 my-4">No Project</h2>
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={NoProjectImg}
        alt="no project"
      />
      <p>No project existing or selected.</p>
      <p className="mb-8">Please select a project or create a new one</p>
      <Button handleClick={handleClick} label="Create a project"></Button>
    </article>
  );
}
