import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const rootPath = process.cwd();
const postsPath = path.join(rootPath, "data", "posts");
const mainFileName = "index.mdx";
const featuredImageName = "featured-image.jpg";

export const getSlugs = () => {
  const slugs = fs
    .readdirSync(postsPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return slugs;
};

export const getPostsPaths = () => {
  const slugs = getSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return paths;
};

export const getPostBySlug = (slug) => {
  const featuredImageUrl = `/images/posts/${slug}/${featuredImageName}`;
  const mainFilePath = path.join(postsPath, slug, mainFileName);
  const postSource = fs.readFileSync(mainFilePath).toString();
  const { content, data } = matter(postSource);

  return {
    frontmatter: {
      ...data,
      slug: slug,
      featuredImage: featuredImageUrl,
    },
    source: content,
  };
};

export const getAllPosts = () => {
  const slugs = getSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));

  return posts;
};
