function Button({ children, type, icon, onClick, hasIcon = false }) {
  const base =
    "flex items-center py-2 px-4 gap-2 text-md sm:text-md rounded-xl z-10 text-gray-100 transition-all duration-300 ease-linear";

  const style = {
    primary:
      "bg-gradient-to-tr from-slate-800 to-slate-800 hover:from-slate-900 hover:to-slate-900 border-t border-slate-700 hover:border-slate-600 shadow-none hover:shadow-md hover:shadow-md",
    secondary:
      "text-sm md:text-md bg-gradient-to-tr from-cyan-800 to-sky-800 hover:from-cyan-900 hover:to-sky-900 border-t border-cyan-700 hover:border-cyan-600 shadow-none hover:shadow-md hover:shadow-gray-900/60 font-medium",
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={onClick} className={`${base} ${style[type]}`}>
        {hasIcon && <span>{icon}</span>}
        {children}
      </button>
    </div>
  );
}

export default Button;
