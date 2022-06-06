import Link from "../../Link";

const Dropdown = ({ items }) => {
  return (
    <ul
      className={`relative lg:absolute mt-6 lg:mt-0 flex flex-col gap-4 border-l-2 lg:border-none border-l-green pl-4 lg:p-6 lg:bg-white lg:shadow-md lg:w-64 transition-opacity dropdown__menu`}
    >
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`text-gray-100 lg:text-zinc-600 hover:text-gray-300 lg:hover:text-green transition-all`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
