import { ImageResponse } from "next/og";
import { OgImage, ogSize } from "@/lib/og";

export function GET() {
  return new ImageResponse(<OgImage />, { ...ogSize });
}
