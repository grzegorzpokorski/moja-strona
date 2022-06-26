import DropdownItem from "./DropdownItem";

import { useState, useEffect } from "react";
import ClickAwayListener from "../../ClickAwayListener";
const Dropdown = ({ categories, initialDropdownValue }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleEscapeKeyPress = ({ key }) =>
      isDropdownOpen && key === "Escape" && setIsDropdownOpen(false);

    window.addEventListener("keydown", handleEscapeKeyPress);

    return () => window.removeEventListener("keydown", handleEscapeKeyPress);
  });

  return (
    <div className={"w-full lg:w-4/12"}>
      <ClickAwayListener onClickAway={closeDropdown}>
        <div
          className={`flex flex-col text-left w-full bg-white shadow-md dropdown ${
            isDropdownOpen ? "dropdown--open" : ""
          }`}
        >
          <button
            className="h-16 px-6 border-2 border-zinc-400 hover:border-green text-left text-zinc-600 hover:text-green dropdown__button"
            type="button"
            id="dropdownMenuButton"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            {initialDropdownValue}
          </button>
          <ul
            className={`flex flex-col py-4 bg-white shadow-md z-10 dropdown__menu ${
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
      </ClickAwayListener>
    </div>
  );
};

export default Dropdown;
