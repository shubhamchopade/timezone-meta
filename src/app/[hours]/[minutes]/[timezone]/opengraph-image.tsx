import dateTime from "@/utils/datetime";
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

// Image generation
export default async function Image({
  params,
}: {
  params: {
    hours: string;
    minutes: string;
    timezone: string;
  };
}) {
  const { hours, minutes, timezone } = params;
  const timeStrings = dateTime({ hours, minutes, timezone });

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
        {/* {sourceTimeString} */}
        {timeStrings.map((t) => {
          return (
            <div
              key={t.time}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 8,
                }}
              >
                {/* timezone name */}
                <p
                  style={{
                    color: t.color,
                    marginLeft: 8,
                    lineHeight: 0.01,
                    fontSize: 80,
                  }}
                >
                  {t.name}
                </p>
                {/* city */}
                <p
                  style={{
                    color: t.color,
                    lineHeight: 1,
                    fontSize: 24,
                    marginLeft: 8,
                    marginTop: 16,
                  }}
                >
                  {t.city}
                </p>
              </div>

              {/* Time and Date */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 8,
                }}
              >
                {/* time */}
                <p
                  style={{
                    marginLeft: 8,
                    lineHeight: 0.01,
                    fontSize: 80,
                  }}
                >
                  {t.time}
                </p>
                {/* date */}
                <p
                  style={{
                    lineHeight: 1,
                    fontSize: 24,
                    marginLeft: 8,
                    marginTop: 16,
                  }}
                >
                  {t.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    ),
    {
      ...size,
    }
  );
}
