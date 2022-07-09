import Button from "../../Button";

const ListItem = ({ icon, title, price, features, href }) => {
  return (
    <li className="w-full bg-white border-2 border-greenLight hover:border-green drop-shadow-lg rounded-md transition flex flex-col">
      <article className="p-8 flex flex-col gap-6 h-full justify-between">
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-3 items-center justify-center text-center">
            {icon && (
              <span className="relative bg-green inline-block min-w-[4rem] min-h-[4rem] rounded-md">
                <span className="font-bold text-white text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  {icon}
                </span>
              </span>
            )}
            <h3 className="text-lg font-medium mt-3">{title}</h3>
          </header>
          <div className="flex flex-col text-center">
            <p className="border-y-2 border-zinc-200 py-2">
              <span>już od </span>
              <span className="text-lg font-bold text-green">{price}</span>
            </p>
          </div>
          <div className="prose max-w-none">
            <ul>
              {features &&
                features.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
          </div>
        </div>
        <div className="flex flex-col text-center items-center">
          <Button href={href} label="Uzyskaj darmową wycenę" />
        </div>
      </article>
    </li>
  );
};

export default ListItem;
