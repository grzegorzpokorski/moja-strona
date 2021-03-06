import Link from "../../Link";

const FooterMenu = ({ items }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center gap-3">
      {items &&
        items.map((item, i) => (
          <li key={`footer-nav-item-${i}`}>
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default FooterMenu;
