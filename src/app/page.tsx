import React from "react";
import styles from "./page.module.css";
import { Card } from "@/components/Card";
import classNames from "classnames";

/**
 * Home page. Renders the default Next.js welcome content with documentation links.
 */
export default function Home() {
  const cards = [
    {
      id: "card-001",
      status: "active",
      category: "Development",
      title: "Mastering CSS Container Queries",
      description:
        "A deep dive into building components that respond to their parent's width using the new @container syntax.",
      image: "https://picsum.photos/seed/dev/800/450",
      tags: ["CSS", "Frontend"],
    },
    {
      id: "card-002",
      status: "archived",
      category: "Design",
      title: "The Psychology of Color in UI",
      description:
        "How choosing the right palette can influence user behavior and accessibility in modern web applications.",
      image: "https://picsum.photos/seed/design/800/450",
      tags: ["UX", "UI Design"],
    },
    {
      id: "card-003",
      status: "active",
      category: "Performance",
      title: "Optimizing OKLCH for Dark Mode",
      description:
        "Using relative color syntax to create perceptually uniform color palettes that scale across themes.",
      image: "https://picsum.photos/seed/perf/800/450",
      tags: ["Optimization", "Themes"],
    },
    {
      id: "card-004",
      status: "new",
      category: "Tutorial",
      title: "Building a Modern CSS Reset from Scratch",
      description:
        "Why a solid reset layer is the most important part of your global layer hierarchy.",
      image: "https://picsum.photos/seed/reset/800/450",
      tags: ["Architecture", "Reset"],
    },
    {
      id: "card-005",
      status: "featured",
      category: "Case Study",
      title: "Scaling Design Tokens for Enterprise",
      description:
        "How to manage thousands of primitive and semantic tokens without losing your mind.",
      image: "https://picsum.photos/seed/scale/800/450",
      tags: ["Enterprise", "Tokens"],
    },
    {
      id: "card-006",
      status: "active",
      category: "Security",
      title: "Input Sanitization and CSS :has()",
      description:
        "Using advanced selectors to provide instant visual feedback on form validation states.",
      image: "https://picsum.photos/seed/secure/800/450",
      tags: ["Security", "Forms"],
    },
    {
      id: "card-007",
      status: "draft",
      category: "Workflow",
      title: "The Future of CSS Layers",
      description:
        "Managing specificity in large-scale projects using the @layer directive.",
      image: "https://picsum.photos/seed/layers/800/450",
      tags: ["Future", "Workflow"],
    },
    {
      id: "card-008",
      status: "active",
      category: "Mobile",
      title: "Handling Notch Displays and Safe Areas",
      description:
        "Implementing env(safe-area-inset) to ensure your UI works on every device.",
      image: "https://picsum.photos/seed/mobile/800/450",
      tags: ["Mobile", "iOS"],
    },
    {
      id: "card-009",
      status: "active",
      category: "Accessibility",
      title: "Inclusive Components for the Modern Web",
      description:
        "Focusing on ARIA patterns and keyboard navigation within your component layer.",
      image: "https://picsum.photos/seed/a11y/800/450",
      tags: ["A11y", "Best Practices"],
    },
    {
      id: "card-010",
      status: "hot",
      category: "Trends",
      title: "Why Logical Properties Matter",
      description:
        "Moving beyond top/bottom/left/right to support internationalization and RTL layouts easily.",
      image: "https://picsum.photos/seed/trends/800/450",
      tags: ["i18n", "Layout"],
    },
  ];

  return (
    <div className={styles.container}>
      <main className={classNames(styles.main, styles.card_grid)}>
        {cards.map((card, key) => (
          <Card
            key={key}
            title={card.title}
            status={card.status}
            category={card.category}
            description={card.description}
            image={card.image}
            tags={card.tags}
          />
        ))}
      </main>
    </div>
  );
}
