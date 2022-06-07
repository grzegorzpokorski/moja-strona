import Link from "../Link";

const CategoriesTabs = ({ categories }) => {
  console.log(categories);
  return (
    <ul className={`flex flex-row flex-wrap gap-3 mt-8`}>
      {categories.map((cat) => (
        <li key={cat}>
          <Link
            href={`/blog/kategoria/${cat}`}
            className={`inline-block bg-white text-md text-zinc-400 hover:text-green border-2 border-zinc-400 hover:border-green px-2 py-1.5
                transition-all`}
          >
            {cat}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesTabs;
