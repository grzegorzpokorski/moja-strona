export const Content = ({ columns, content, withSpaceAbove }) => {
  console.log();
  return columns ? (
    <div
      className={`w-full prose max-w-none gap-8 ${
        withSpaceAbove ? "mt-8 md:mt-12" : ""
      } content content--col-${columns}`}
    >
      {content}
    </div>
  ) : (
    <div
      className={`w-full prose max-w-none gap-8 ${
        withSpaceAbove ? "mt-8 md:mt-12" : ""
      }`}
    >
      {content}
    </div>
  );
};

export default Content;
