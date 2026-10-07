import type { Metadata } from "next";
import { site } from "@/data/site";
import { ogAlt, ogSize } from "@/lib/og";

type OpenGraph = NonNullable<Metadata["openGraph"]>;

export const ogImage = {
  url: "/og",
  width: ogSize.width,
  height: ogSize.height,
  alt: ogAlt,
};

export function pageOpenGraph(
  path: string,
  title: string,
  description: string,
): OpenGraph {
  return {
    type: "website",
    locale: "es_PE",
    siteName: site.name,
    title,
    description,
    url: path,
    images: [ogImage],
  };
}
