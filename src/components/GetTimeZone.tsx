"use client";

import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const GetTimeZone = () => {
  const path = usePathname();
  const searchParams = useSearchParams();
  console.log(path, searchParams.get("to"));
  const [imageUrl, setImageUrl] = React.useState<string>("");

  useEffect(() => {
    const res = async () => {
      const response = await fetch(
        `http://localhost:8000${path}?to=${searchParams.get("to")}`,
        {
          mode: "cors",
        }
      );
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
