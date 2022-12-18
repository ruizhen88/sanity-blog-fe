import Link from "next/link";
import styles from "./index.module.scss";
import Page from "../components/Page";
import Feed from "../components/Feed";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import React from "react";
import Sidebar from "../components/Sidebar";

const author = {
  name: "ruizhen88",
  photo: "media/profile.jpg",
  bio: "Programming, video journey, thoughts.",
  contacts: {
    email: "",
    facebook: "#",
    telegram: "#",
    twitter: "#",
    github: "ruizhen88",
    rss: "",
    vkontakte: "",
    linkedin: "#",
    instagram: "#",
    line: "",
    gitlab: "",
    weibo: "",
    codepen: "",
    youtube: "",
    soundcloud: "",
  },
};

const Index = ({ posts }) => {
  return (
    <>
      {/* <Layout title={pageTitle} description={siteSubtitle}> */}
      <Sidebar isIndex />
      <Page>
        <Feed posts={posts} />
        {/* <Pagination
                prevPagePath={prevPagePath}
                nextPagePath={nextPagePath}
                hasPrevPage={hasPrevPage}
                hasNextPage={hasNextPage}
              /> */}
      </Page>
      {/* </Layout> */}
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        allPost {
          slug {
            current
          }
          title
          author {
            name
          }
          categories {
            title
          }
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
  });

  return {
    props: {
      posts: data.allPost,
    },
  };
}

export default Index;
