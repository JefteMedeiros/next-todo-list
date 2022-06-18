import React, { useState } from "react";
import { SiVercel } from "react-icons/si";

const Header: React.FC = () => {
  const [style, setStyle] = useState("animate-none");

  const handleClick = () => {
    setStyle(style == "animate-none" ? "animate-pulse" : "animate-none");
  };

  return (
    <div className="p-4 bg-cyan-600 text-white text-center">
      <h1 className="flex items-center justify-center gap-4 text-[2rem]">
        Next.JS Todo-List
        <button onClick={(e) => handleClick()}>
          <SiVercel className={style} />
        </button>
      </h1>
    </div>
  );
};

export default Header;
