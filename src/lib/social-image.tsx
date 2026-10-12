import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

export function createSocialImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "#ffffff",
        color: "#17202e",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "14px",
              background: "#17202e",
              color: "#ffffff",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            {profile.initials}.
          </div>
          <div style={{ display: "flex", fontSize: "30px", fontWeight: 700 }}>
            {profile.name}.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            border: "2px solid #e7e9ec",
            borderRadius: "999px",
            padding: "12px 22px",
            color: "#65707e",
            fontSize: "20px",
          }}
        >
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            color: "#c25c28",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Portfolio · Full Stack & Android App Development
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: "930px",
            marginTop: "24px",
            fontSize: "76px",
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: "-4px",
          }}
        >
          Building useful products from interface to API.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "2px solid #eceef0",
          paddingTop: "28px",
          color: "#596372",
          fontSize: "22px",
        }}
      >
        <div style={{ display: "flex" }}>{profile.currentStack.join(" · ")}</div>
        <div style={{ display: "flex", color: "#c25c28", fontWeight: 700 }}>
          Punjab, India
        </div>
      </div>
    </div>,
    socialImageSize,
  );
}
