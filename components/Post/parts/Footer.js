import Link from "../../Link";

const Footer = ({ tags }) => {
  return (
    <footer className="block container mx-auto px-3 w-full md:w-6/12">
      <ul className="flex flex-row flex-wrap gap-2 mt-8">
        {tags.map((tag) => (
          <li key={tag} className="inline-block">
            <Link
              href={`/blog/tag/${tag}`}
              className="py-2 px-4 bg-whiteGreen text-sm border-2 border-green"
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
