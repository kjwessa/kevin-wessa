import type { CollectionConfig } from "payload";
import { isAdmin } from "@/access/isAdmin";
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const Media: CollectionConfig = {
  slug: "media",

  //* Access Settings
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: () => true,
    update: isAdmin,
  },

  //* Collection Fields
  fields: [
    {
      name: "title",
      type: "text",
      label: "File Name",
      required: true,
      admin: {
        description:
          "This is the file name of the image, allowed for easier semantic searching.",
      },
    },
    {
      name: "alt",
      type: "text",
      label: "Alt Text",
      required: true,
      admin: {
        description: "This is the alt text for the image",
      },
    },
    {
      name: "caption",
      type: "richText",
      label: "Caption",
      admin: {
        description:
          "This is the caption for the image. Optional, but helpful for Blog Posts requiring a caption.",
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
    },
  ],

  //* Admin Settings
  admin: {
    listSearchableFields: ["title", "url", "alt"],
  },

  upload: true,
};
