import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Aril — Personal Space";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fdf8f8",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          border: "24px solid #f1edec",
          boxSizing: "border-box",
        }}
      >
        {/* Main Content Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            border: "1px solid #e5e2e1",
            padding: "50px",
            background: "#fdf8f8",
          }}
        >
          {/* Top Row: Monogram Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#1c1b1b",
                color: "#fdf8f8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              A
            </div>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#1c1b1b",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Aril
            </span>
          </div>

          {/* Middle Row: Title & Subtitle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "840px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                fontSize: "64px",
                fontWeight: "bold",
                color: "#1c1b1b",
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Aril — Personal Space
            </h1>
            <p
              style={{
                fontSize: "24px",
                color: "#444748",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              A tech learner exploring AI tools, games, creative ideas, and the digital world.
            </p>
          </div>

          {/* Bottom Row: Footer and Domain */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #e5e2e1",
              paddingTop: "24px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#747878",
                fontWeight: 600,
              }}
            >
              Personal Space on the Internet
            </span>
            <span
              style={{
                fontSize: "15px",
                color: "#1c1b1b",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              apa-amber.vercel.app
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
