import styles from "./hamburger.module.scss";

type HamburgerProps = {
  mobileMenuIsOpen: boolean;
  handleMobileMenuIsOpen: () => void;
};

export const Hamburger = ({ mobileMenuIsOpen, handleMobileMenuIsOpen }: HamburgerProps) => {
  const ariaLabelForOpened = "Zamknij";
  const ariaLabelForClosed = "Otwórz";

  return (
    <button
      id="hamburger"
      className={`lg:hidden ${styles.hamburger}`}
      aria-label={`${mobileMenuIsOpen ? ariaLabelForOpened : ariaLabelForClosed} menu nawigacyjne`}
      onClick={handleMobileMenuIsOpen}
    >
      <span
        className={`${styles.icon} transition ${mobileMenuIsOpen ? styles.iconMenuIsOpen : ""}`}
      ></span>
    </button>
  );
};
