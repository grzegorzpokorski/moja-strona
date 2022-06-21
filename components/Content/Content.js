export const Content = ({ columns, content, withSpaceAbove }) => {
  return (
    <div
      className={`prose max-w-none gap-8 columns-1 lg:columns-${
        columns ? columns : "1"
      } ${withSpaceAbove ? "mt-8 md:mt-12" : ""}`}
    >
      {content}
    </div>
  );
};

export default Content;
