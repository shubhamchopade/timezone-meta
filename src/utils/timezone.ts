export const timeZones = [
  {
    timeZone: "Asia/Kolkata",
    name: "IST",
    color: "#3a86ff",
    city: "Mumbai",
  },
  {
    timeZone: "America/Los_Angeles",
    name: "PST",
    color: "#ff213d",
    city: "Los Angeles",
  },
  {
    timeZone: "America/New_York",
    name: "EST",
    color: "#fb5607",
    city: "New York",
  },
  {
    timeZone: "America/Chicago",
    name: "CST",
    color: "#ff006e",
    city: "Chicago",
  },
  {
    timeZone: "America/Denver",
    name: "MST",
    color: "#8338ec",
    city: "Denver",
  },
];

export function getTimezoneName(tz: string) {
  const isPacific =
    tz.toLowerCase() === "pst" ||
    tz.toLowerCase() === "pdt" ||
    tz.toLowerCase() === "pacific" ||
    tz.toLowerCase() === "pt";
  const isEastern =
    tz.toLowerCase() === "est" ||
    tz.toLowerCase() === "edt" ||
    tz.toLowerCase() === "eastern" ||
    tz.toLowerCase() === "et";
  const isCentral =
    tz.toLowerCase() === "cst" ||
    tz.toLowerCase() === "cdt" ||
    tz.toLowerCase() === "central" ||
    tz.toLowerCase() === "ct";
  const isMountain =
    tz.toLowerCase() === "mst" ||
    tz.toLowerCase() === "mdt" ||
    tz.toLowerCase() === "mountain" ||
    tz.toLowerCase() === "mt";
  const isIndian =
    tz.toLowerCase() === "ist" ||
    tz.toLowerCase() === "indian" ||
    tz.toLowerCase() === "it";

  let timezoneName = "America/New_York";
  if (timezoneName) {
    if (isPacific) {
      timezoneName = "America/Los_Angeles";
    } else if (isEastern) {
      timezoneName = "America/New_York";
    } else if (isCentral) {
      timezoneName = "America/Chicago";
    } else if (isMountain) {
      timezoneName = "America/Denver";
    } else if (isIndian) {
      timezoneName = "Asia/Kolkata";
    }
  }
  return timezoneName;
}
