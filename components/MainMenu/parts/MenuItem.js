import Link from "../../Link";

const MenuItem = (item) => {
  return (
    <li>
      {item.button ? (
        <Link
          href={item.href}
          className={`inline-block bg-green hover:bg-greenHover text-white px-6 py-3
                transition-all ${item.childrens && "dropdown-toggle"}`}
        >
          {item.label}
        </Link>
      ) : (
        <Link
          href={item.href}
          className="text-gray-100 lg:text-zinc-600 hover:text-gray-300 lg:hover:text-green transition-all"
        >
          {item.label}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
