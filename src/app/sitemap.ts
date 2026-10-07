import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { families } from "@/data/families";
import { products } from "@/data/products";

const baseUrl = site.url.replace(/\/$/, "");

const staticRoutes = [
  "/",
  "/nosotros",
  "/soluciones",
  "/soluciones/rfa",
  "/alquiler",
  "/asesoria",
  "/contacto",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const familyRoutes = families.map((family) => `/soluciones/rfa/${family.slug}`);

  const productRoutes = products.map(
    (product) => `/soluciones/rfa/${product.family}/${product.slug}`,
  );

  return [...staticRoutes, ...familyRoutes, ...productRoutes].map((path) => ({
    url: path === "/" ? baseUrl : `${baseUrl}${path}`,
  }));
}
