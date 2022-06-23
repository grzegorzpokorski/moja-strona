import React from "react";
import DropdownItem from "./DropdownItem";

import { useState } from "react";
const Dropdown = ({
  categories,
  isOpen,
  toggleDropdown,
  initialDropdownValue,
}) => {
  return (
    <div className={"w-full lg:w-4/12"} data-name="dropdownMenu">
      <div
        className={`flex flex-col text-left w-full bg-white shadow-md dropdown ${
          isOpen ? "dropdown--open" : ""
        }`}
      >
        <button
          className="h-16 px-6 border-2 border-zinc-400 hover:border-green text-left text-zinc-600 hover:text-green transition dropdown__button"
          type="button"
          id="dropdownMenuButton"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          {initialDropdownValue}
        </button>
        <ul
          className="flex flex-col py-4 bg-white shadow-md z-10 dropdown__menu"
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
