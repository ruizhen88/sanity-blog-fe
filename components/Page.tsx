import React, { useRef, useEffect, ReactNode } from "react";
import styles from "./Page.module.scss";

type Props = {
  title?: string;
  children: ReactNode;
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (pageRef?.current) {
      pageRef.current.scrollIntoView();
    }
  }, []);

  return (
    <div ref={pageRef} className={styles["page"]}>
      <div className={styles["page__inner"]}>
        {title && <h1 className={styles["page__title"]}>{title}</h1>}
        <div className={styles["page__body"]}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
