/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ogSize } from "@/lib/og";

export const dynamic = "force-static";

const [logoData, productData] = await Promise.all([
  readFile(join(process.cwd(), "public/images/logo.jpg"), "base64"),
  readFile(join(process.cwd(), "public/images/products/cooled-kit.png"), "base64"),
]);

const logoSrc = `data:image/jpeg;base64,${logoData}`;
const productSrc = `data:image/png;base64,${productData}`;

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "56px 64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={logoSrc} width={252} height={252} alt="" />
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 21,
              letterSpacing: 3,
              color: "#1a8290",
            }}
          >
            RADIOFRECUENCIA · PERÚ
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 8,
              fontSize: 34,
              fontWeight: 700,
              color: "#07316d",
            }}
          >
            Avanos · Baylis Medtech
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              width: 340,
              height: 2,
              background: "#d9e8ea",
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 24,
              color: "#4a5b72",
            }}
          >
            painsolutionsperu.com
          </div>
        </div>

        <img
          src={productSrc}
          width={480}
          height={510}
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...ogSize },
  );
}
