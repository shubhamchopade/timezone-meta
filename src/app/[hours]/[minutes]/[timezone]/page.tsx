import GetTimeZone from "@/components/GetTimeZone";
import React from "react";

import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { hours: string; minutes: string; timezone: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { hours, minutes, timezone } = params;
  return {
    title: hours,
  };
}

const TimeZone = () => {
  return <div>{/* <GetTimeZone /> */}</div>;
};

export default TimeZone;
