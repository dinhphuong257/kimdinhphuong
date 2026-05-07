import { ImageResponse } from "next/og";
import { profileData } from "@/data/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0f172a", // slate-900
          backgroundImage: "linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 55%, rgb(67, 56, 202) 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontSize: "80px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: "-0.05em",
            }}
          >
            {profileData.name}
          </h1>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 500,
              color: "#818cf8", // indigo-400
              lineHeight: 1.2,
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {profileData.title}
          </h2>
          <p
            style={{
              fontSize: "30px",
              color: "#cbd5e1", // slate-300
              maxWidth: "900px",
              lineHeight: 1.5,
            }}
          >
            Student profile, projects, tutorials, and practical insights in Supply Chain Management.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "30px",
                backgroundColor: "#4f46e5", // indigo-600
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              KP
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <span style={{ fontSize: "28px", color: "white", fontWeight: 600 }}>kimdinhphuong.dev</span>
              <span style={{ fontSize: "22px", color: "#94a3b8" }}>Portfolio & Blog</span>
            </div>
          </div>
          
        </div>
      </div>
    ),
    { ...size }
  );
}
