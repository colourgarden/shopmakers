/**
 * Types declaration for global entities.
 *
 * 1. Empty export is needed because TypeScript treats files without
 *    import/exports as legacy script files.
 */

import type { IReadTimeResults } from 'reading-time';

declare global {
  // Generics
  type AppContextProps = {
    children: React.ReactNode;
    blogs: string[];
  };

  type EventOptions = {
    callback?: () => void;
    props?: { [propName: string]: string };
  };

  type PlausibleArgs = [string, EventOptions] | [string];

  interface Window {
    plausible: {
      (...args: PlausibleArgs): void;
      q?: PlausibleArgs[];
    };
  }

  type Frontmatter = {
    title: string;
    description: string;
    locale: string;
    alternate: string;
    isPublished: boolean;
    publishedAt: string;
    tags: string[];
  };

  interface Alternate {
    [key: string]: string | number;
  }

  type Meta = {
    type: string;
    image: string;
    imageAlt: string;
    publishedAt?: string | number | Date;
    modifiedAt?: Date;
    tags?: string;
    alternate?: Alternate;
    locale?: string;
    title?: string;
    description?: string;
  };

  type ContainerProps = {
    seo?: { [key: string]: string };
    children: React.ReactNode;
  };

  type ButtonProps = {
    onClick?: React.MouseEventHandler;
    href: string;
    text: string;
  };

  type SectionProps = {
    id?: string;
    classes?: string;
    withContainer?: boolean;
    children: JSX.Element;
  };

  type SiteFooterProps = {
    alternate: string | undefined | Alternate;
  };

  // Blog
  type BlogCardProps = {
    title: string;
    description: string;
    slug: string;
    publishedAt: Date;
  };

  type BlogCodeProps = {
    className: string;
  };

  type BlogContainer = {
    code: string;
    frontmatter: Frontmatter;
    readingTime: IReadTimeResults;
  };

  type BlogHeadingProps = {
    tags: string[];
    publishedAt: string;
    readingTime: IReadTimeResults;
  };

  type BlogInformation = {
    slug: string;
    readingTime: IReadTimeResults;
  } & Frontmatter;

  type BlogLinkProps = {
    href: string;
    children: React.ReactElement;
  };

  type BlogPreformattedProps = {
    className: string;
    children: React.ReactElement;
  };

  // Home
  type HomeProps = {
    blogs: BlogCardProps[];
  };
}
export {};
