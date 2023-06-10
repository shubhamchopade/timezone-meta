import GetTimeZone from "@/components/timezone";
import React from "react";

import { Metadata } from "next";
import { DateTime } from "luxon";
import Footer from "@/components/footer";

type Props = {
  params: { hours: string; minutes: string; timezone: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hours, minutes, timezone } = params;

  const current = DateTime.fromObject(
    { hour: parseInt(hours), minute: parseInt(minutes) },
    { zone: timezone }
  );

  return {
    title:
      `TIME | ${current.toLocaleString(DateTime.DATETIME_FULL)}` ||
      "Time is FE",
    description: "Convert timezones easily by Shubham Chopade",
  };
}

const TimeZone = () => {
  return (
    <div>
      <GetTimeZone />
      <Footer />
    </div>
  );
};

export default TimeZone;
