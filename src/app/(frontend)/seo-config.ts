export const SEO_Config = {
  titleTemplate: "%s | Brewww Studio",
  defaultTitle: "Brewww Studio",
  description: "Brewww Studio - We craft unbounded brands",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brewww.studio",
    siteName: "Brewww Studio",
    images: [
      {
        url: "https://brewww.studio/oh-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brewww Studio",
      },
    ],
  },
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "author", content: "Brewww Studio" },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    { rel: "me", href: "https://www.facebook.com/brewwwstudio" },
    { rel: "me", href: "https://www.instagram.com/brewwwstudio" },
  ],
};
