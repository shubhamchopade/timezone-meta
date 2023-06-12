import dateTimeTarget from "@/utils/datetimeTarget";
import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "timezone";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Fonts
const interBlack = fetch(new URL("./Inter-Black.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer()
);
const interNormal = fetch(new URL("./Inter-Regular.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

// Image generation
export default async function Image({
  params,
}: {
  params: {
    hours: string;
    minutes: string;
    timezone: string;
    target: string;
  };
}) {
  const { hours, minutes, timezone, target } = params;
  const timeStrings = dateTimeTarget({
    hours,
    minutes,
    timezone,
    _target: target,
  });

  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {timeStrings.map((t) => {
          return (
            // Container
            <div
              key={t.time}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 80,
              }}
            >
              {/* TIMEZONE AND CITY */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 8,
                  marginTop: 24,
                }}
              >
                {/* timezone */}
                <p
                  style={{
                    color: t.color,
                    marginLeft: 8,
                    lineHeight: 0.01,
                    fontSize: 120,
                    fontWeight: 900,
                  }}
                >
                  {t.name}
                </p>
                {/* city */}
                <p
                  style={{
                    color: t.color,
                    lineHeight: 1,
                    fontSize: 36,
                    marginLeft: 8,
                    marginTop: 36,
                  }}
                >
                  {t.city}
                </p>
              </div>

              {/* TIME AND DATE */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  padding: 8,
                  marginLeft: 32,
                }}
              >
                {/* time */}
                <p
                  style={{
                    marginLeft: 8,
                    lineHeight: 0.01,
                    fontSize: 120,
                    fontWeight: 900,
                  }}
                >
                  {t.time}
                </p>
                {/* date */}
                <section
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: -64,
                    marginLeft: 32,
                    fontWeight: 400,
                    color: "#aaa",
                  }}
                >
                  <p
                    style={{
                      lineHeight: 1,
                      fontSize: 52,
                    }}
                  >
                    {t.date.split(", ").slice(0, 3)[0]}
                  </p>
                  <p
                    style={{
                      lineHeight: 1,
                      fontSize: 52,
                      marginTop: -10,
                    }}
                  >
                    {t.date.split(", ").slice(0, 3)[1]}
                  </p>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interBlack,
          style: "normal",
          weight: 900,
        },
        {
          name: "Inter",
          data: await interNormal,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
