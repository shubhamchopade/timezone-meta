import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation";

const NotFound = () => {
  redirect(`/${new Date().getHours()}/${new Date().getMinutes()}/est`);
};

export default NotFound;
