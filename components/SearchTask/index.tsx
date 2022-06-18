import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  setSearch: (search: string) => void;
}

const SearchTask: React.FC<Props> = ({ setSearch }) => {
  const buttonStyles = {
    normal: "rotate-360 transition-all",
    flipped: "rotate-180 transition-all",
  };

  const searchTaskStyles = {
    normal: "flex flex-col gap-2 items-start rotate-360 transition-all",
    hidden:
      "hidden disabled transition-all mb-[-72px]",
  };

  const [buttonStyle, setButtonStyle] = useState(buttonStyles.normal);
  const [containerStyle, setContainerStyle] = useState(searchTaskStyles.normal);

  const handleSetShow = () => {
    setButtonStyle(
      buttonStyle == buttonStyles.normal
        ? buttonStyles.flipped
        : buttonStyles.normal
    );
    setContainerStyle(
      containerStyle == searchTaskStyles.normal
        ? searchTaskStyles.hidden
        : searchTaskStyles.normal
    );
  };

  return (
    <div className="flex flex-col w-[300px] mt-2 items-start">
      <div className="flex items-center gap-2 text-2xl text-white">
        Search task
        <button onClick={() => handleSetShow()}>
          <BsChevronDown className={buttonStyle} />
        </button>
      </div>
      <div className={containerStyle}>
        <div className="flex items-center relative pl-3 my-4 rounded-md bg-white w-[300px]">
          <AiOutlineSearch className="absolute right-2 text-zinc-700" />
          <input
            className="outline-none my-2 w-[260px]"
            placeholder="Search..."
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchTask;
