import Button from "../../Button";

const TagsList = ({ tags, withMarginOnTop }) => {
  return (
    <ul className={`flex flex-row flex-wrap gap-2 text-sm`}>
      {tags.map((tag) => (
        <li key={tag}>
          <Button
            label={tag}
            href={`/blog/tag/${tag}`}
            size="small"
            style="tag"
          />
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
