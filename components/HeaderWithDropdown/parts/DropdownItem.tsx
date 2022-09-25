import { Link } from "../../Link/Link";

import { memo } from "react";
import slugify from "slugify";

type Props = {
  name: string;
  active?: boolean;
};

export const DropdownItem = memo(({ name, active = false }: Props) => {
  return (
    <li className={`px-6 py-1 ${active ? "text-green" : "hover:text-green"} transition`}>
      <Link
        className="block dropdown__item"
        href={`/blog/kategoria/${slugify(name, {
          replacement: "-",
          lower: true,
        })}`}
      >
        {name}
      </Link>
    </li>
  );
});

DropdownItem.displayName = "DropdownItem";
