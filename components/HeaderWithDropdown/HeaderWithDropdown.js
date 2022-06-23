import Dropdown from "./parts/Dropdown";
import Heading from "./parts/Heading";

import { useState, useEffect } from "react";

const HeaderWithSelectCategory = ({
  subtitle,
  title,
  description,
  titleAsH1,
  categories,
  initialDropdownValue,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleEscapeKey = ({ key }) => {
      key && key === "Escape" && setMobileMenuIsOpen(false);
    };

    const handleClickOffTheDropdown = ({ target }) => {
      const dropdownMenu = document.querySelector("[data-name=dropdownMenu]");

      do {
        if (target === dropdownMenu) return;
        target = target.parentNode;
      } while (target != null);

      setIsDropdownOpen(false);
    };

    if (isDropdownOpen) {
      window.addEventListener("keydown", handleEscapeKey);
      window.addEventListener("click", handleClickOffTheDropdown);
    }

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("click", handleClickOffTheDropdown);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={`flex flex-col lg:flex-row gap-6 lg:gap-20`}>
      <Heading
        title={title}
        subtitle={subtitle}
        description={description}
        titleAsH1={titleAsH1}
      />
      <Dropdown
        initialDropdownValue={initialDropdownValue}
        toggleDropdown={toggleDropdown}
        isOpen={isDropdownOpen}
        categories={categories}
      />
    </header>
  );
};

export default HeaderWithSelectCategory;
