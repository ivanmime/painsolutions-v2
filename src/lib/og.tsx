export const ogSize = { width: 1200, height: 630 };

export const ogAlt =
  "Pain Solutions — tecnología médica especializada para el manejo del dolor";

export function OgImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0B1F3A",
        padding: "72px 80px",
        color: "#FFFFFF",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, letterSpacing: 8, color: "#7FB2E5" }}>
        PAIN SOLUTIONS
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 66, fontWeight: 700, lineHeight: 1.15 }}>
          Tecnología para el manejo del dolor
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#B9C7D6", marginTop: 24 }}>
          Equipos, insumos y accesorios RFA Avanos — Perú
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#7FB2E5" }}>
        www.painsolutionsperu.com
      </div>
    </div>
  );
}
