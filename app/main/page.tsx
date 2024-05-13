"use client";
import { Fragment, useState, useContext } from "react";
import TopicPage from "@/components/TopicPage";
import { NaviContext } from "@/components/Navi";

const pages = [<TopicPage />, null, null, null];

export default function Page() {
  const { selected } = useContext(NaviContext);
  return pages[selected];
}
