import Link from "../../Link";

const SocialMenu = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, i) => (
          <li key={`social-nav-item-${i}`}>
            <Link href={item.href} className="hover:text-greenHover">
              <span className="sr-only">{item.label}</span>
              {item.icon}
            </Link>
          </li>
        ))}
    </>
  );
};

export default SocialMenu;
