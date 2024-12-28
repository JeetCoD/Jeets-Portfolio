import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const HeaderLabels = [
  { headerName: "projects" },
  { headerName: "github", to: "https://github.com/JeetCoD" },
  { headerName: "about" },
  { headerName: "blogs", to: "/blog" },
];

function handleScroll({ data }) {
  const section = document.getElementById(data.headerName);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center py-2 px-4 backdrop-blur-sm mt-2 sm:mt-4 border bg-white/50  w-[98%] sm:w-[90%] mx-auto sm:rounded-xl rounded-xl transition-all duration-300 ease-in-out relative z-50 h-14 sm:h-auto shadow-sm ">
        <div>
          <p className="text-xl font-semibold bg-gradient-to-br from-slate-900 to-gray-700 bg-clip-text text-transparent">
            JeetCoD
          </p>
        </div>

        {isMobile ? (
          <div className="flex items-center gap-4">
            <Link className="text-slate-100 bg-slate-800 text-sm font-medium hover:font-semibold py-1 px-2 rounded-md tracking-tight hover:bg-gray-950 transition-all ease-linear duration-150">
              Let&apos;s Talk
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        ) : (
          <>
            <nav className="hidden sm:flex gap-4">
              {HeaderLabels.map((data) => (
                <Link
                  key={data.headerName}
                  className="text-slate-600 text-sm font-semibold hover:text-slate-50 transition-all ease-linear duration-200 cursor-pointer py-1 hover:bg-slate-800 rounded-md px-2 capitalize"
                  onClick={() => handleScroll({ data })}
                  to={data.to}
                  target={data.to ? "_blank" : undefined}
                >
                  <span>{data.headerName}</span>
                </Link>
              ))}
            </nav>
            <Link className="text-slate-100 bg-slate-800 text-sm font-medium hover:font-semibold py-1 px-2 rounded-lg tracking-tight hover:bg-gray-950 transition-all ease-linear duration-150">
              Let&apos;s Talk
            </Link>
          </>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <>
          <div
            className={`fixed inset-0 bg-slate transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
          />
          <div
            className={`fixed top-0 left-0 right-0 bg-slate-100/95 backdrop-blur-sm w-full mx-auto transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen
                ? "opacity-100 visible border-b border-gray-600/30"
                : "opacity-0 invisible pointer-events-none"
            }`}
            style={{
              height: isMenuOpen ? "100vh" : "0",
            }}
          >
            <nav className="flex flex-col items-center justify-center h-full py-4">
              {HeaderLabels.map((data) => (
                <Link
                  key={data.headerName}
                  className="text-gray-500 text-lg font-medium hover:text-gray-800 transition-all ease-linear duration-200 cursor-pointer py-2 px-4 rounded-md capitalize"
                  onClick={() => {
                    handleScroll({ data });
                    setIsMenuOpen(false);
                  }}
                  to={data.to}
                  target={data.to ? "_blank" : undefined}
                >
                  <span>{data.headerName}</span>
                </Link>
              ))}
              <Link
                className="text-slate-100 bg-slate-800 text-md font-medium hover:font-semibold p-2 rounded-xl tracking-tight hover:bg-gray-950 transition-all ease-linear duration-150 w-[50%] text-center "
                onClick={() => setIsMenuOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </nav>
          </div>
        </>
      )}

      <Tooltip
        id="my-tooltip"
        style={{
          backgroundColor: "#0f172a",
          borderRadius: "8px",
          padding: "8px",
        }}
      />
    </header>
  );
}
