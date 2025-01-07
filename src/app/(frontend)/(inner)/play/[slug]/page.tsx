// import configPromise from "@payload-config";
// import { getPayload } from "payload";
// import React from "react";
// import { notFound } from "next/navigation";
// import { Play } from "@/payload-types";
// import Image from "next/image";
// import Link from "next/link";
// import { MetaDot } from "@/components/MetaDot";
// import { formatDate } from "@/utilities/formatDateTime";

// //* Render the play page
// export default async function PlayPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const resolvedParams = await params;
//   if (!resolvedParams.slug) {
//     notFound();
//   }

//   const play = await queryPlayBySlug({ slug: resolvedParams.slug });
//   if (!play) {
//     notFound();
//   }

//   const fallbackDescription = "Add a cool description here.";
//   const imageUrl =
//     typeof play.image === "string" ? play.image : play.image?.url || "";
//   const imageAlt =
//     typeof play.image === "object"
//       ? play.image?.alt
//       : "Featured image for play project";

//   return (
//     <article className="bg-white pt-24 text-black">
//       <section className="container mx-auto px-4 pb-12 pt-12">
//         <div className="max-w-5xl">
//           <h1 className="mb-4 text-5xl font-medium leading-tight md:text-6xl">
//             {play.title}
//           </h1>
//           <p className="mb-8 max-w-3xl text-xl text-gray-700">
//             {play.description || fallbackDescription}
//           </p>
//           <div className="flex items-center gap-1 text-sm text-gray-500">
//             <span>
//               By{" "}
//               <Link className="text-gray-950" href={""}>
//                 Kevin Wessa
//               </Link>
//             </span>
//             <MetaDot />
//             <span>
//               {play.publishedOn
//                 ? formatDate({ date: play.publishedOn, format: "shortDateStamp" })
//                 : "Date not available"}
//             </span>
//           </div>
//         </div>
//       </section>

//       <div className="w-full">
//         <div className="px-2">
//           <div className="relative aspect-3/2 w-full">
//             <Image
//               src={imageUrl}
//               fill
//               alt={imageAlt}
//               className="rounded-md object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// //* Query function to fetch play by slug
// async function queryPlayBySlug({
//   slug,
// }: {
//   slug: string;
// }): Promise<Play | null> {
//   const payload = await getPayload({ config: configPromise });
//   try {
//     const result = await payload.find({
//       collection: "play",
//       limit: 1,
//       where: {
//         slug: {
//           equals: slug,
//         },
//       },
//     });
//     return result.docs[0] || null;
//   } catch (error) {
//     return null;
//   }
// }

// //* Generate static params for all play projects
// export async function generateStaticParams() {
//   const payload = await getPayload({ config: configPromise });
//   try {
//     const plays = await payload.find({
//       collection: "play",
//       limit: 1000,
//       overrideAccess: false,
//     });
//     return (
//       plays.docs?.map((play) => ({
//         params: { slug: play.slug as string },
//       })) || []
//     );
//   } catch (error) {
//     return [];
//   }
// }

export default function Page() {
  return <div>play</div>
}
