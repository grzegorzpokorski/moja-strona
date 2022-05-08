import Link from "next/link";

const FooterMenu = ({ items }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center gap-3">
      {items &&
        items.map((item, i) => (
          <li key={`footer-nav-item-${i}`}>
            <Link href={item.href}>
              <a className="hover:underline">{item.label}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default FooterMenu;
