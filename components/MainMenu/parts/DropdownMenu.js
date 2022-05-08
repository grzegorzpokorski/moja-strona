import Link from "next/link";

const DropdownMenu = ({ items }) => {
  return (
    <ul className="lg:absolute bg-white lg:drop-shadow-md mt-4 flex flex-col lg:w-72 pb-4 dropdown-menu transition-all duration-300">
      {items &&
        items.map((item, i) => (
          <li key={`dropdown-item-${i}`} className="pt-4">
            <Link href={item.href}>
              <a className="block text-gray-500 lg:text-gray-800 hover:text-green border-l-2 border-transparent hover:border-green px-4 transition-all duration-300">
                {item.label}
              </a>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default DropdownMenu;
