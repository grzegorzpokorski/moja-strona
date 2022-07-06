import slugify from "slugify";

const DropdownItem = ({ name, active = false }) => {
  return (
    <li
      className={`px-6 py-1 ${
        active ? "text-green" : "hover:text-green"
      } transition`}
    >
      <a
        className="block dropdown__item"
        href={`/blog/kategoria/${slugify(name, {
          replacement: "-",
          lower: true,
        })}`}
      >
        {name}
      </a>
    </li>
  );
};

export default DropdownItem;
