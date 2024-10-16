import type { CollectionConfig } from "payload";

import { isAdmin, isAdminFieldLevel } from "@/access/isAdmin";
import { isAdminOrSelf, isAdminOrSelfFieldLevel } from "@/access/isAdminOrSelf";

export const Users: CollectionConfig = {
  slug: "users",

  //TODO Remove the FULL NAME on the MONGO side

  //* Access Settings
  access: {
    create: isAdmin,
    delete: isAdminOrSelf,
    read: () => true,
    update: isAdminOrSelf,
  },

  //* Collection Fields
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          required: true,
        },
        { name: "lastName", label: "Last Name", type: "text", required: true },
      ],
    },

    {
      name: "roles",
      type: "select",
      access: {
        create: isAdminFieldLevel,
        read: isAdminOrSelfFieldLevel,
        update: isAdminFieldLevel,
      },
      hasMany: true,
      options: ["admin", "public"],
      required: true,
    },
  ],

  //* Admin Settings
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  // TODO: Uncomment this when we have a domain
  // auth: {
  //   cookies: {
  //     domain: process.env.COOKIE_DOMAIN,
  //     sameSite:
  //       process.env.NODE_ENV === "production" &&
  //       !process.env.DISABLE_SECURE_COOKIE
  //         ? "None"
  //         : undefined,
  //     secure:
  //       process.env.NODE_ENV === "production" &&
  //       !process.env.DISABLE_SECURE_COOKIE
  //         ? true
  //         : undefined,
  //   },
  //   tokenExpiration: 28800, // 8 hours
  // },
};
