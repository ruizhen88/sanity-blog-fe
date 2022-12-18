// @flow strict
import React from "react";
import Link from "next/link";
import styles from "./Feed.module.scss";
import { toPlainText } from "@portabletext/react";
import Image from "next/image";

const Feed = ({ posts }: FeedProps) => (
  <div className={styles["feed"]}>
    {posts.map(
      (
        {
          _id,
          title = "",
          slug = {},
          publishedAt = "",
          categories = [],
          bodyRaw = [],
          mainImage = {},
        },
        idx
      ) => (
        <div className={styles["feed__item"]} key={idx}>
          {mainImage && (
            <Image
              src={mainImage.asset.url}
              layout="intrinsic"
              width={200}
              height={200}
            />
          )}
          <div className={styles["feed__item-meta"]}>
            <span className={styles["feed__item-meta-time"]}>
              {new Date(publishedAt).toDateString()}
            </span>
            <span className={styles["feed__item-meta-divider"]} />
            <span className={styles["feed__item-meta-category"]}>
              {categories?.map((category) => (
                // <Link
                //   to={edge.node.fields.categorySlug}
                //   className={styles["feed__item-meta-category-link"]}
                // >
                <span key={category.title}>{category.title} | </span>
                // </Link>
              ))}
            </span>
          </div>
          <h2 className={styles["feed__item-title"]}>
            <Link
              className={styles["feed__item-title-link"]}
              href="/[slug]"
              as={`/${slug.current}`}
            >
              {title}
            </Link>
          </h2>

          <p className={styles["feed__item-description"]}>
            {/* READ https://github.com/portabletext/react-portabletext */}
            {toPlainText(bodyRaw).slice(0, 50) + "..."}
          </p>
          <Link
            className={styles["feed__item-readmore"]}
            href="/[slug]"
            as={`/${slug.current}`}
          >
            Read
          </Link>
        </div>
      )
    )}
  </div>
);

export default Feed;
