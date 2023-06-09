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
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
  const response = await fetch(`http://localhost:3000/api/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      hour: hours,
      minute: minutes,
      timezone,
      to: searchParams.to,
    }),
  });
  const json = await response.json();
  // console.log("ASdasd", json.url);

  return {
    title: hours,
    description: minutes,
    openGraph: {
      images: [json.url],
    },
  };
}

const TimeZone = () => {
  return (
    <div>
      <GetTimeZone />
    </div>
  );
};

export default TimeZone;
