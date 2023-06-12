"use client";
import { timeZones } from "@/utils/timezone";
import React from "react";

const Footer = () => {
  const tld = "URL";
  return (
    <footer className="lg:fixed px-2 text-xs bottom-3 left-2 my-8">
      <div className="text-sm bottom-10 left-2 mb-4">
        <p className="font-bold">How to use?</p>
        <p>URL is important. Append as following </p>
        <p className="text-red-400">
          TIME <span className="italic">24 hours</span> / MINUTES / TIMEZONE /
          TARGET (optional)
        </p>
        <p className="font-bold mt-2">Supported timezones for now</p>
        {timeZones.map((t) => (
          <span key={t.name} className="ml-2">
            {t.name}
          </span>
        ))}

        <p className="font-bold mt-2">Examples</p>
        {/* Example 1 */}
        <p>Share 12:30 PM EST with everyone</p>
        <p className="">
          <span className="text-blue-400">{tld}/12/30/est</span>
        </p>
        {/* Example 2 */}
        <p className="mt-2">Share 10:00 PM IST with everyone</p>
        <p className="">
          <span className="text-blue-400">{tld}/22/00/ist</span>
        </p>
      </div>
      <span className="opacity-50">
        Built using Next.js by{" "}
        <a className="underline" href="https://shubhamchopade.com">
          Shubham Chopade
        </a>
      </span>
      <a
        className="ml-2"
        href="https://github.com/shubhamchopade/timezone-meta"
      >
        Source code
      </a>
    </footer>
  );
};

export default Footer;
