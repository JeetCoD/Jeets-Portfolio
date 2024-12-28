import AOS from "aos";
import { useEffect } from "react";

function SectionHeader({ children, margin, id }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className={`flex gap-3 items-end  ${margin} `}>
      <span className="font-bold text-lg sm:text-2xl  text-gray-900  uppercase">
        0{id}.
      </span>
      <p className="font-semibold  text-lg sm:text-2xl  text-gray-500  ">
        {children}
      </p>
    </div>
  );
}

export default SectionHeader;
