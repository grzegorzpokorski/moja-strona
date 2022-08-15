type HamburgerProps = {
  mobileMenuIsOpen: boolean;
  handleMobileMenuIsOpen: () => void;
};

const Hamburger = ({
  mobileMenuIsOpen,
  handleMobileMenuIsOpen,
}: HamburgerProps) => {
  const ariaLabelForOpened = "Zamknij";
  const ariaLabelForClosed = "Otwórz";

  return (
    <button
      id="hamburger"
      className={`lg:hidden hamburger`}
      aria-label={`${
        mobileMenuIsOpen ? ariaLabelForOpened : ariaLabelForClosed
      } menu nawigacyjne`}
      onClick={handleMobileMenuIsOpen}
    >
      <span
        className={`bg-black dark:bg-zinc-400 before:bg-black dark:before:bg-zinc-400 after:bg-black  dark:after:bg-zinc-400 hamburger__icon transition ${
          mobileMenuIsOpen ? "hamburger__icon--menuIsOpen" : ""
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
