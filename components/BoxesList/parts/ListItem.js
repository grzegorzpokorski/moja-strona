import Link from "../../Link";

const ListItem = ({ icon, subtitle, title, description, href }) => {
  return (
    <li className="w-full bg-white border-2 border-greenLight drop-shadow-xl rounded-md">
      <article className="p-8 flex flex-col items-start gap-6">
        <header className="flex flex-row gap-3 items-center">
          {icon && (
            <span className="relative bg-green inline-block min-w-[4rem] min-h-[4rem] rounded">
              <span className="font-bold text-white text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {icon}
              </span>
            </span>
          )}
          {href ? (
            <Link
              href={href}
              className="text-customGray hover:text-green transition hover:underline"
            >
              <h3 className="font-bold text-lg">{title}</h3>
            </Link>
          ) : (
            <h3 className="font-bold text-lg text-customGray">{title}</h3>
          )}
        </header>
        {description && <div className="prose max-w-none">{description}</div>}
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
