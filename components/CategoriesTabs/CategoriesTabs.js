import Button from "../Button";

const CategoriesTabs = ({ categories }) => {
  return (
    <ul className={`flex flex-row flex-wrap gap-3 mt-8`}>
      {categories.map((cat) => (
        <li key={cat}>
          <Button
            label={cat}
            href={`/blog/kategoria/${cat}`}
            style="whiteZinc"
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesTabs;
