/// <reference types="astro/client" />
/// <reference types="astro/astro-jsx" />
/// <reference path="../.astro/content.d.ts" />

declare namespace JSX {
  interface IntrinsicElements {
    [key: string]: any;
  }
}

/* CSS imports */
declare module "*.css" {
  const content: string;
  export default content;
}

/* Image imports */
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}
