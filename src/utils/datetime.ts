import { DateTime } from "luxon";

const dateTime = ({
  hours,
  minutes,
  timezone,
}: {
  hours: string;
  minutes: string;
  timezone: string;
}) => {
  const isPacific =
    timezone.toLowerCase() === "pst" ||
    timezone.toLowerCase() === "pdt" ||
    timezone.toLowerCase() === "pacific" ||
    timezone.toLowerCase() === "pt";
  const isEastern =
    timezone.toLowerCase() === "est" ||
    timezone.toLowerCase() === "edt" ||
    timezone.toLowerCase() === "eastern" ||
    timezone.toLowerCase() === "et";
  const isCentral =
    timezone.toLowerCase() === "cst" ||
    timezone.toLowerCase() === "cdt" ||
    timezone.toLowerCase() === "central" ||
    timezone.toLowerCase() === "ct";
  const isMountain =
    timezone.toLowerCase() === "mst" ||
    timezone.toLowerCase() === "mdt" ||
    timezone.toLowerCase() === "mountain" ||
    timezone.toLowerCase() === "mt";
  const isIndian =
    timezone.toLowerCase() === "ist" ||
    timezone.toLowerCase() === "indian" ||
    timezone.toLowerCase() === "it";

  let timeZone = "America/New_York";
  if (timezone) {
    if (isPacific) {
      timeZone = "America/Los_Angeles";
    } else if (isEastern) {
      timeZone = "America/New_York";
    } else if (isCentral) {
      timeZone = "America/Chicago";
    } else if (isMountain) {
      timeZone = "America/Denver";
    } else if (isIndian) {
      timeZone = "Asia/Kolkata";
    }
  }

  // generate time strings for other time zones
  const timeZones = [
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

  const current = DateTime.fromObject(
    { hour: parseInt(hours), minute: parseInt(minutes) },
    { zone: timeZone }
  );

  const timeStrings = timeZones.map((tz) => {
    // @ts-ignore
    const z = DateTime.fromISO(current.toISO(), { zone: tz.timeZone });
    return {
      time: z.toLocaleString(DateTime.TIME_SIMPLE),
      date: z.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY),
      ...tz,
    };
  });

  return timeStrings;
};

export default dateTime;
