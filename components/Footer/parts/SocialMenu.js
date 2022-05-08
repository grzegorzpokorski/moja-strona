const SocialMenu = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, i) => (
          <li key={`social-nav-item-${i}`}>
            <a
              href={item.href}
              target="_blank"
              rel="nofolow noreferrer"
              className="hover:text-greenHover"
            >
              <span className="sr-only">{item.label}</span>
              {item.icon}
            </a>
          </li>
        ))}
    </>
  );
};

export default SocialMenu;
