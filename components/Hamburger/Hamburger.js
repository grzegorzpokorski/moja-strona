const Hamburger = ({ mobileMenuIsOpen, handleMobileMenuIsOpen }) => {
  return (
    <button
      className={`lg:hidden hamburger`}
      aria-label="Otwórz menu nawigacyjne"
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
