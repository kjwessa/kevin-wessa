"use client";
import React, { useState, useEffect, useRef } from "react";

interface LexicalNode {
  type: string;
  tag?: string;
  children?: LexicalNode[];
  text?: string;
  version?: number;
  [key: string]: unknown;
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: LexicalNode[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  const extractHeadings = (nodes: LexicalNode[]): TOCItem[] => {
    const headings: TOCItem[] = [];
    nodes.forEach((node, index) => {
      if (node.type === "heading") {
        const tag = node.tag || "1";
        const text = node.children?.[0]?.text || `Heading ${index + 1}`;
        headings.push({
          id: `heading-${headings.length}`,
          text: text,
          level: parseInt(tag.slice(1)),
        });
      }
    });
    return headings;
  };

  useEffect(() => {
    const headings = extractHeadings(content);
    setToc(headings);

    const observerOptions = { rootMargin: "0px 0px -80% 0px" };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    // Delay the observation to ensure DOM elements are ready
    setTimeout(() => {
      headings.forEach((heading: TOCItem) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.current?.observe(element);
        }
      });
    }, 100);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [content]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="table-of-contents">
      <h2 className="mb-2 text-lg font-bold">Table of Contents</h2>
      <ul className="space-y-1">
        {toc.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer hover:text-black ${
              activeId === item.id ? "font-bold text-black" : ""
            }`}
            style={{ marginLeft: `${(item.level - 1) * 12}px` }}
            onClick={() => handleClick(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
