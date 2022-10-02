import { DropdownItem } from "./DropdownItem";
import { useState, useEffect, useRef } from "react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import cn from "classnames";
import styles from "../headerWithDropdown.module.scss";

type Props = {
  categories: string[];
  initialDropdownValue: string;
};

export const Dropdown = ({ categories, initialDropdownValue }: Props) => {
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
  useOnClickOutside(dropDownRef, closeDropdown);

  return (
    <div className={cn("w-full lg:w-4/12")}>
      <div
        className={cn("flex flex-col text-left w-full shadow-md", styles.dropdown, {
          [styles.dropdownOpen]: isDropdownOpen,
        })}
        ref={dropDownRef}
      >
        <button
          className={cn(
            "h-12 lg:h-16 px-6 border-2 border-zinc-400 hover:border-green bg-white rounded text-left text-zinc-600 hover:text-green",
            styles.button,
          )}
          type="button"
          id="dropdownMenuButton"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {initialDropdownValue}
        </button>
        <ul
          className={cn("flex flex-col py-2 lg:py-4 bg-white shadow-md z-10 rounded", styles.menu, {
            [styles.menuWillChangeTransform]: isDropdownOpen,
          })}
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
