import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#1c1b1b",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fdf8f8",
          borderRadius: "50%",
          fontWeight: "bold",
          fontFamily: "serif",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
