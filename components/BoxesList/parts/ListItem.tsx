import Link from "../../Link";
import { BoxesListItem } from "../../../types/types";

const ListItem = ({ icon, title, description, href }: BoxesListItem) => {
  return (
    <li className="w-full bg-white dark:bg-zinc-800 border-2 border-greenLight dark:border-zinc-700 drop-shadow-xl rounded-md">
      <article className="p-8 flex flex-col items-start gap-6">
        <header className="flex flex-row gap-3 items-center">
          {icon && (
            <span className="relative bg-green inline-block min-w-[4rem] min-h-[4rem] rounded">
              <span className="font-bold text-white dark:text-zinc-900 text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {icon}
              </span>
            </span>
          )}
          {href ? (
            <Link
              href={href}
              className="text-customGray dark:text-zinc-200 hover:text-green transition hover:underline"
            >
              <h3 className="font-bold text-lg">{title}</h3>
            </Link>
          ) : (
            <h3 className="font-bold text-lg text-customGray dark:text-zinc-200">
              {title}
            </h3>
          )}
        </header>
        {description && (
          <div className="prose dark:prose-invert max-w-none">
            {description}
          </div>
        )}
        {href && (
          <Link href={href} className="text-green hover:underline custom-link">
            Dowiedz się więcej
          </Link>
        )}
      </article>
    </li>
  );
};

export default ListItem;
