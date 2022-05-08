import Link from "../Link";

const OfferList = ({ items, withMarginTop }) => {
  console.log(items);
  return (
    <ul
      className={`flex flex-col lg:grid md:grid-cols-2 xl:grid-cols-3 gap-6 ${
        withMarginTop && "mt-12 md:mt-24"
      }`}
    >
      {items &&
        items.map(({ icon, title, description, href }) => (
          <li
            key={title}
            className="w-full bg-white border-2 border-greenLight drop-shadow-xl"
          >
            <article className="p-8">
              <header className="flex flex-row gap-3 items-center">
                {icon && (
                  <span className="relative bg-green inline-block min-w-[4rem] min-h-[4rem]">
                    <span className="font-bold text-white text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      {icon}
                    </span>
                  </span>
                )}
                <Link href={href} className="hover:underline">
                  <h3 className="font-bold text-lg">{title}</h3>
                </Link>
              </header>
              {description && <p className="mt-6">{description}</p>}
            </article>
          </li>
        ))}
    </ul>
  );
};

export default OfferList;
