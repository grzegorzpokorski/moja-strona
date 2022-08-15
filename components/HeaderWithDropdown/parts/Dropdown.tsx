import DropdownItem from "./DropdownItem";

import { useState, useEffect, useRef } from "react";
import useOnClickAway from "../../../hooks/useOnClickAway";

type Props = {
  categories: string[];
  initialDropdownValue: string;
};

const Dropdown = ({ categories, initialDropdownValue }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleEscapeKeyPress = ({ key }: KeyboardEvent) =>
      isDropdownOpen && key === "Escape" && setIsDropdownOpen(false);

    window.addEventListener("keydown", handleEscapeKeyPress);

    return () => window.removeEventListener("keydown", handleEscapeKeyPress);
  });

  const dropDownRef = useRef<HTMLDivElement>(null);
  useOnClickAway(dropDownRef, closeDropdown);

  return (
    <div className={"w-full lg:w-4/12"}>
      <div
        className={`flex flex-col text-left w-full shadow-md dropdown ${
          isDropdownOpen ? "dropdown--open" : ""
        }`}
        ref={dropDownRef}
      >
        <button
          className="h-12 lg:h-16 px-6 border-2 border-zinc-400 hover:border-green bg-white dark:bg-zinc-800 rounded text-left text-zinc-600 dark:text-zinc-400 hover:text-green dropdown__button"
          type="button"
          id="dropdownMenuButton"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {initialDropdownValue}
        </button>
        <ul
          className={`flex flex-col py-2 lg:py-4 bg-white dark:bg-zinc-800 shadow-md z-10 rounded dropdown__menu ${
            isDropdownOpen ? "dropdown__menu--willChangeTransform" : ""
          }`}
          aria-labelledby="dropdownMenuButton"
        >
          {categories &&
            categories.map((category) => (
              <DropdownItem
                key={category}
                name={category}
                active={category === initialDropdownValue ? true : false}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
