import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17191c",
        }}
      >
        <div
          style={{
            width: "82%",
            height: "82%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #c79559",
            borderRadius: "22px",
            color: "#ffe2a6",
            fontFamily: "Georgia, serif",
            fontSize: "70px",
            fontWeight: 700,
            letterSpacing: "-10px",
            paddingRight: "10px",
          }}
        >
          ES
        </div>
      </div>
    ),
    size,
  );
}
