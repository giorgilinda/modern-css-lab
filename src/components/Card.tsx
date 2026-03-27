import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import classNames from "classnames";
import Tag from "./Tag";

/**
 * Props for the Card component.
 */
interface CardProps {
  /** Content to render inside the card */
  children?: React.ReactNode;
  title?: string;
  className?: string;
  status?: string;
  category?: string;
  description?: string;
  image?: string;
  tags?: string[];
}

/**
 * Card container component for grouping related content.
 *
 * @example
 * ```tsx
 * <Card title="User Profile">
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
  children,
  title,
  className,
  status,
  category,
  description,
  image,
  tags,
}) => {
  return (
    <div
      className={classNames(
        styles.card,
        className,
        status ? styles[status] : ""
      )}
    >
      {category && (
        <span>
          <small>{category}</small>
        </span>
      )}
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.container}>
        {image && (
          <Image
            src={image}
            alt={title || "Image of the card"}
            width={200}
            height={200}
          />
        )}
        {description}
      </div>
      {children}
      <div className={styles.tags}>
        {tags && tags.map((tag, k) => <Tag key={k} text={tag} />)}
      </div>{" "}
    </div>
  );
};
