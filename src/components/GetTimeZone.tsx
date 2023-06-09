"use client";

import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const GetTimeZone = () => {
  const path = usePathname();
  const searchParams = useSearchParams();
  console.log(path, searchParams.get("to"));
  const [imageUrl, setImageUrl] = React.useState<string>("");

  const hours = path.split("/")[1];
  const minutes = path.split("/")[2];
  const timezone = path.split("/")[3];

  useEffect(() => {
    const res = async () => {
      const response = await fetch(`/api/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hour: hours,
          minute: minutes,
          timezone,
          to: searchParams.get("to"),
        }),
      });
      const json = await response.json();
      setImageUrl(json.url);
      console.log(json);
    };

    res();
  }, []);

  return (
    <div>
      GetTimeZone
      {/* <Image src={imageUrl} alt="time zone" width={500} height={500} /> */}
      <img src={imageUrl} alt="time zone" />
    </div>
  );
};

export default GetTimeZone;
