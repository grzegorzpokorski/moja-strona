import { Link } from "../../Link/Link";
import { memo } from "react";
import slugify from "slugify";
import cn from "classnames";

type Props = {
  name: string;
  active?: boolean;
};

export const DropdownItem = memo(({ name, active = false }: Props) => {
  return (
    <li
      className={cn(
        "px-6 py-1 transition",
        { "text-green": active },
        { "hover:text-green": !active },
      )}
    >
      <Link
        className="block"
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
