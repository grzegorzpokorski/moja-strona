import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export type PostFrontmatter = {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  published: boolean;
  featuredImage: string;
  slug: string;
};

export type PostWithRawSource = {
  frontmatter: PostFrontmatter;
  source: string;
};

export type PostWithCompiledSource = {
  frontmatter: PostFrontmatter;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const postsDir = path.join(process.cwd(), "data/posts");

export const getPostBySlug = async (slug: string): Promise<PostWithRawSource> => {
  const postPath = path.join(postsDir, `${slug}.mdx`);
  const postSource = await fs.readFile(postPath, { encoding: "utf-8" });
  const { content, data } = matter(postSource);

  return {
    frontmatter: {
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      tags: data.tags,
      date: data.date,
      published: data.published,
      featuredImage: data.featuredImage,
      slug,
    },
    source: content,
  };
};

export const getAllPosts = async (): Promise<PostWithRawSource[]> => {
  const slugs = await getAllSlugs();
  const posts = slugs.map(async (slug) => await getPostBySlug(slug));

  return Promise.all(posts);
};

export const sortPostsByPublishedDate = (posts: PostWithRawSource[] | PostWithCompiledSource[]) => {
  const sorted = posts.sort((a, b) => {
    const first = dayjs(a.frontmatter.date, "YYYY.MM.DD");
    const second = dayjs(b.frontmatter.date, "YYYY.MM.DD");

    return first.isBefore(second) ? 1 : -1;
  });

  return sorted;
};

export const getPublishedPosts = async () => {
  const posts = await getAllPosts();

  return posts.filter((post) => post.frontmatter.published === true);
};

export const getAllSlugs = async () => {
  const allFileNames = await fs.readdir(postsDir);
  const onlyMdx = allFileNames.filter((file) => path.extname(file.toLowerCase()) === ".mdx");

  return onlyMdx.map((file) => path.basename(file, ".mdx"));
};

export const getSlugsOfPublishedPosts = async () => {
  const publishedPosts = await getPublishedPosts();

  return publishedPosts.map((post) => post.frontmatter.slug);
};

export const getCategories = async () => {
  const posts = await getPublishedPosts();
  const categories = new Set(posts.map((post) => post.frontmatter.category));

  return Array.from(categories);
};

export const getTags = async () => {
  const posts = await getPublishedPosts();
  const tags = new Set(posts.map((post) => post.frontmatter.tags).flat());

  return Array.from(tags);
};
