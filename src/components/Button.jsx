export default function Button({ label, handleClick, ...props }) {
  const classes =
    "bg-slate-600 hover:bg-slate-900 rounded py-2 px-4 text-center text-slate-100 hover:text-slate-50";
  function triggerHandleClick() {
    handleClick();
  }
  return (
    <button className={classes} onClick={triggerHandleClick}>
      {label}
    </button>
  );
}
