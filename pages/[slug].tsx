import { PortableText, PortableTextComponent } from "@portabletext/react";
import client from "../apollo-client";
import { gql } from "@apollo/client";
import React from "react";
import Link from "next/link";
import styles from "components/Post/Post.module.scss";
import { Post } from "../types";

const Post = ({ post }: { post: Post }) => {
  const { title = "Missing title", categories, bodyRaw = [] } = post;
  return (
    <div className={styles["post"]}>
      <div className={styles["post__home-button"]}>
        <Link href="/">All Articles</Link>
      </div>

      <div className={styles["post__content"]}>
        <div className={styles["content"]}>
          <h1 className={styles["content__title"]}>{title}</h1>
          <div className={styles["content__body"]}>
            <PortableText value={bodyRaw} />
          </div>
        </div>
      </div>

      <div className={styles["post__footer"]}>
        {/* <Meta date={date} /> */}
        {/* {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />} */}
        {/* <Author /> */}
      </div>

      <div className={styles["post__comments"]}>
        {/* <Comments postSlug={slug} postTitle={post.frontmatter.title} /> */}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        allPost {
          slug {
            current
          }
        }
      }
    `,
  });
  return {
    paths: data.allPost.map((post) => ({
      params: { slug: post.slug.current },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  // TODO: check isLoading, probably why title undefined.
  const { data } = await client.query({
    query: gql`
      query ($slug: String) {
        allPost(where: { slug: { current: { eq: $slug } } }) {
          title
          bodyRaw
          mainImage {
            asset {
              url
            }
          }
          publishedAt
        }
      }
    `,
    variables: { slug },
  });
  return {
    props: {
      post: data.allPost[0],
    },
  };
}

export default Post;
