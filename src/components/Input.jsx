import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, isTextAera, ...props }, ref) {
  return (
    <div className="flex flex-col mt-4">
      {label && (
        <label className="uppercase text-slate-700 text-sm">{label}</label>
      )}

      {isTextAera ? (
        <textarea ref={ref} {...props}></textarea>
      ) : (
        <input type="text" ref={ref} {...props} />
      )}
    </div>
  );
});
export default Input;
