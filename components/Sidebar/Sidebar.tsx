// @flow strict
import React from "react";
import Author from "./Author";
import styles from "./Sidebar.module.scss";
// import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean;
};

const Sidebar = ({ isIndex }: Props) => {
  // const { author, copyright, menu } = useSiteMetadata();
  const author = {
    name: "ruizhen88",
    bio: "Programming, video journey, thoughts.",
    photo: "https://focused-jung.netlify.app/media/profile.jpg",
  };
  const copyright = "";
  // const menu

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__inner"]}>
        <Author author={author} isIndex={isIndex} />
        {/* <Menu menu={menu} /> */}
        {/* <Contacts contacts={author.contacts} /> */}
        {/* <Copyright copyright={copyright} /> */}
      </div>
    </div>
  );
};

export default Sidebar;
