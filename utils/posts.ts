import fs from "fs";
import path from "path";
import matter from "gray-matter";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import { MDXRemoteSerializeResult } from "next-mdx-remote";

import siteUrl from "../data/seo/siteUrl";

const rootPath = process.cwd();
const postsPath = path.join(rootPath, "data", "posts");
const mainFileName = "index.mdx";
// const featuredImageName = "featured-image.jpg";

export type PostFrontmatter = {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  published: boolean;
  slug: string;
  featuredImage: string;
};

export type PostWithRawSource = {
  frontmatter: PostFrontmatter;
  source: string;
};

export type PostWithCompiledSource = {
  frontmatter: PostFrontmatter;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

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

export const getPostBySlug = (
  slug: string,
): { frontmatter: PostFrontmatter; source: string } => {
  // const featuredImageUrl = `/images/posts/${slug}/${featuredImageName}`;
  const mainFilePath = path.join(postsPath, slug, mainFileName);
  const postSource = fs.readFileSync(mainFilePath).toString();
  const { content, data } = matter(postSource);

  return {
    frontmatter: {
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      tags: data.tags,
      date: data.date,
      published: data.published,
      slug: data.slug,
      featuredImage: data.featuredImage,
    },
    source: content,
  };
};

export const getAllPosts = () => {
  const slugs = getSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));

  return posts;
};

export const getPublishedPostsOrderByDate = () => {
  const posts = getAllPosts();
  const published = posts.filter((post) => post.frontmatter.published == true);
  const sorted = published.sort((a, b) => {
    const first = dayjs(a.frontmatter.date, "YYYY.MM.DD");
    const second = dayjs(b.frontmatter.date, "YYYY.MM.DD");

    return first.isBefore(second) ? 1 : -1;
  });

  return sorted;
};

export const getTags = () => {
  const posts = getPublishedPostsOrderByDate();
  const tags = posts.map((post) => post.frontmatter.tags).flat();
  const uniqueTags = new Set(tags);

  return Array.from(uniqueTags);
};

export const getCategories = () => {
  const posts = getPublishedPostsOrderByDate();
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = new Set(categories);

  return Array.from(uniqueCategories);
};
