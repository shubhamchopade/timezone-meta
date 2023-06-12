"use client";

import { usePathname } from "next/navigation";
import React from "react";
import dateTime from "../utils/datetime";
import dateTimeTarget from "@/utils/datetimeTarget";

const GetTimeZoneTarget = () => {
  const path = usePathname();

  const hours = path.split("/")[1];
  const minutes = path.split("/")[2];
  const timezone = path.split("/")[3];
  const target = path.split("/")[4];

  const timeStrings = dateTimeTarget({
    hours,
    minutes,
    timezone,
    _target: target,
  });

  return (
    <div className="max-w-xl mx-auto sm:px-8 ">
      {timeStrings.map((t) => {
        return (
          <div key={t.time} className="flex items-center justify-between mt-4">
            <div className="flex flex-col p-2">
              {/* Timezone name and City */}
              <p
                style={{
                  color: t.color,
                }}
                className="text-6xl"
              >
                {t.name}
              </p>
              {/* city */}
              <p
                style={{
                  color: t.color,
                }}
                className="text-2xl"
              >
                {t.city}
              </p>
            </div>

            {/* Time and Date */}
            <div className="flex flex-col p-2">
              {/* time */}
              <p className="text-6xl">{t.time}</p>
              {/* date */}
              <p className="text-2xl">{t.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GetTimeZoneTarget;
