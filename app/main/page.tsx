"use client";
import { Fragment, useState, useContext } from "react";
import TopicPage from "@/components/TopicPage";
import ChatPage from "@/components/ChatPage";
import { NaviContext } from "@/components/Navi";

const pages = [<TopicPage />, <ChatPage />, null, null];

export default function Page() {
  const { selected } = useContext(NaviContext);
  return pages[selected];
}
