"use client";
import { Fragment, useState, useContext } from "react";
import TopicPage from "@/components/TopicPage";
import ChatPage from "@/components/ChatPage";
import HomePage from "@/components/HomePage";
import { NaviContext } from "@/components/Navi";

const pages = [<TopicPage />, <ChatPage />, null, <HomePage />];

export default function Page() {
  const { selected } = useContext(NaviContext);
  return pages[selected];
}
