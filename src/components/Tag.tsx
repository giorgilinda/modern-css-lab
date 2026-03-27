import React, { FC } from "react";
import styles from "./Tag.module.css";

interface TagProps {
  text: string;
}

const Tag: FC<TagProps> = ({ text }) => {
  return <span className={styles.tag}>{text}</span>;
};

export default Tag;
