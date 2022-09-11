import { Button } from "../Button/Button";

type Props = {
  categories: string[];
};

export const CategoriesTabs = ({ categories }: Props) => {
  return (
    <ul className={`flex flex-row flex-wrap gap-3 mt-8`}>
      {categories.map((cat) => (
        <li key={cat}>
          <Button label={cat} href={`/blog/kategoria/${cat}`} style="whiteZinc" />
        </li>
      ))}
    </ul>
  );
};
