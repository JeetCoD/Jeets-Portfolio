function Button({ children, type, icon, onClick, hasIcon = false }) {
  const base =
    "flex items-center py-2 px-4 gap-2 hover:text-gray-100 text-md sm:text-lg rounded-lg z-10 text-gray-100 hover:text-gray-50 ";

  const style = {
    primary:
      "bg-gradient-to-tr from-cyan-800 to-sky-800 hover:bg-gradient-to-tr hover:from-cyan-800 hover:to-sky-800 border-t border-cyan-700  hover:border-cyan-600 hover:shadow-md hover:shadow-gray-900/60 ",
    secondary:
      "text-sm md:text-md bg-gradient-to-tr from-cyan-800 to-sky-800 hover:bg-gradient-to-tr hover:from-cyan-900 hover:to-sky-900 border-t border-cyan-700  hover:border-cyan-600 hover:shadow-md hover:shadow-gray-900/60 font-medium",
  };
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        className={`${base} ${style[type]} transition-all ease-in`}
      >
        {hasIcon && <span>{icon}</span>}
       {children}
      </button>
    </div>
  );
}

export default Button;
