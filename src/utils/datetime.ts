import { DateTime } from "luxon";
import { getTimezoneName, timeZones } from "./timezone";

const dateTime = ({
  hours,
  minutes,
  timezone,
}: {
  hours: string;
  minutes: string;
  timezone: string;
}) => {
  const timeZone = getTimezoneName(timezone);

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
