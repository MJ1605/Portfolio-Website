import { useState } from "react";

export const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="fixed top-10 right-4 z-50 w-28 h-12 rounded-4xl cursor-pointer flex items-center justify-center bg-white/70 backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>MENU</p>
      </div>

      <div
        className={`fixed top-24 right-4 w-28 h-40 bg-white rounded-4xl shadow-lg transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } z-40`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-2 p-2">
          {["Home", "Work", "Contact"].map((item) => (
            <li key={item} className="cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
