import { PortableTextComponent } from "@portabletext/react";

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  categories: { title: string }[];
  bodyRaw: PortableTextComponent;
  mainImage: { asset: { url: string } };
};

type Posts = Array<Post>;

export type FeedProps = {
  posts: Posts;
};
