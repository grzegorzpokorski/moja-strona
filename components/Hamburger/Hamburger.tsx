import styles from "./hamburger.module.scss";

type HamburgerProps = {
  isMobileMenuOpen: boolean;
  onClick: () => void;
};

export const Hamburger = ({ isMobileMenuOpen, onClick }: HamburgerProps) => {
  const ariaLabelForOpened = "Zamknij";
  const ariaLabelForClosed = "Otwórz";

  return (
    <button
      id="hamburger"
      className={`lg:hidden ${styles.hamburger}`}
      aria-label={`${isMobileMenuOpen ? ariaLabelForOpened : ariaLabelForClosed} menu nawigacyjne`}
      onClick={onClick}
    >
      <span
        className={`${styles.icon} transition ${isMobileMenuOpen ? styles.iconMenuIsOpen : ""}`}
      ></span>
    </button>
  );
};
