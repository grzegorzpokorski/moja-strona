import path from "path";
import fs from "fs";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "data/posts");
const PUBLIC_ASSETS_PATH = path.join(process.cwd(), "public");
const FEATURED_IMAGE_NAME = "featured-image.jpg";

export const getSlugs = () => {
  return fs
    .readdirSync(POSTS_PATH, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

export const getPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();
  return posts;
};

export const getPostBySlug = (slug) => {
  const post_path = path.join(POSTS_PATH, `${slug}/index.mdx`);
  const source = fs.readFileSync(post_path);
  const { content, data } = matter(source);

  // const featuredImageToCopy = path.join(POSTS_PATH, slug, FEATURED_IMAGE_NAME);
  // const copiedFeaturedImage = path.join(
  //   PUBLIC_ASSETS_PATH,
  //   "images",
  //   slug,
  //   FEATURED_IMAGE_NAME
  // );

  // fs.promises.copyFile(featuredImageToCopy, copiedFeaturedImage);

  return {
    content,
    meta: {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      seo: data.seo ?? "",
    },
    // featuredImage: path.join("public", "images", slug, FEATURED_IMAGE_NAME),
  };
};

export const getPostsByTag = (tag) => {};
