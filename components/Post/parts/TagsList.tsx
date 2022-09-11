import { Button } from "../../Button/Button";
import slugify from "slugify";

type TagListPros = {
  tags: string[];
  withMarginOnTop?: boolean;
};

export const TagsList = ({ tags, withMarginOnTop }: TagListPros) => {
  return (
    <ul className={`flex flex-row flex-wrap gap-2 text-sm`}>
      {tags.map((tag) => (
        <li key={tag}>
          <Button
            label={tag}
            href={`/blog/tag/${slugify(tag, {
              replacement: "-",
              lower: true,
            })}`}
            size="small"
            style="tag"
          />
        </li>
      ))}
    </ul>
  );
};
