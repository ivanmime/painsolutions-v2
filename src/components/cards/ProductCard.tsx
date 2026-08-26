import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { getFamily } from "@/data/families";
import { StaggerItem } from "@/components/motion/Reveal";

export function ProductCard({ product }: { product: Product }) {
  const family = getFamily(product.family);
  return (
    <StaggerItem>
      <Link
        href={`/soluciones/rfa/${product.family}/${product.slug}`}
        className="group relative flex h-full flex-col border-2 border-ink bg-paper transition-colors duration-200 hover:border-teal"
      >
        <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink bg-ice">
          <Image
            src={product.mainImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute left-3 top-3">
            <span className="inline-flex items-center bg-navy px-2 py-0.5 font-mono text-[0.5625rem] font-bold uppercase tracking-[0.2em] text-paper">
              {product.brand}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-teal-deep">
            {product.productType} · {family?.shortName}
          </p>
          <h3 className="mt-2 font-sans text-[1.125rem] font-extrabold leading-[1.2] tracking-[-0.015em] text-navy">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-[0.8125rem] leading-[1.55] text-ink-soft">
            {product.shortDescription}
          </p>
          <div className="mt-4 flex items-center justify-between border-t border-line pt-4 font-mono text-[0.625rem] uppercase tracking-[0.2em]">
            <span className="text-ink-muted">
              SKU {product.variants[0]?.sku ?? "—"}
            </span>
            <span className="flex items-center gap-1.5 font-bold text-navy">
              Ver ficha
              <svg
                width="10"
                height="8"
                viewBox="0 0 14 10"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M1 5h12M9 1l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </StaggerItem>
  );
}

export default ProductCard;
