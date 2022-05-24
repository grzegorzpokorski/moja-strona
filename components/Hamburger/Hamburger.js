const Hamburger = ({ mobileMenuIsOpen, handleMobileMenuIsOpen }) => {
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
        className={`hamburger__icon transition ${
          mobileMenuIsOpen ? "hamburger__icon--menuIsOpen" : ""
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
