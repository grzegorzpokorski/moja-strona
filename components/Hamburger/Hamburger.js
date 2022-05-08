const Hamburger = ({ handleMobileMenu, isOpen }) => {
  return (
    <button
      id="menu-opener"
      className={`flex flex-col justify-around lg:hidden mr-2 hamburger ${
        isOpen && "open"
      }`}
      aria-label="przełącznik nawigacji"
      onClick={handleMobileMenu}
    >
      <span className="sr-only">Otwórz menu</span>
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
};

export default Hamburger;
