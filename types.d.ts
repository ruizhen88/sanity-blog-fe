type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  categories: { title: string }[];
  bodyRaw: unknown;
  mainImage: { asset: { url: string } };
};

type Posts = Array<Post>;

type FeedProps = {
  posts: Posts;
};
