import { DateTime } from "luxon";
import { getTimezoneName, timeZones } from "./timezone";

const dateTimeTarget = ({
  hours,
  minutes,
  timezone,
  _target,
}: {
  hours: string;
  minutes: string;
  timezone: string;
  _target: string;
}) => {
  const source = getTimezoneName(timezone);
  const target = getTimezoneName(_target);

  // reference time in source timezone
  const sourceTimezone = DateTime.fromObject(
    { hour: parseInt(hours), minute: parseInt(minutes) },
    { zone: source }
  );

  const sourceTz = timeZones.filter((tz) => tz.timeZone === source);
  const targetTz = timeZones.filter((tz) => tz.timeZone === target);

  const tzs = [sourceTz[0], targetTz[0]];

  const timeStrings = tzs.map((tz) => {
    // @ts-ignore
    const z = DateTime.fromISO(sourceTimezone.toISO(), { zone: tz.timeZone });
    return {
      time: z.toLocaleString(DateTime.TIME_SIMPLE),
      date: z.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY),
      ...tz,
    };
  });

  return timeStrings;
};

export default dateTimeTarget;
