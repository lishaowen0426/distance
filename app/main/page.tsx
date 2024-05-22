"use client";
import { Fragment, useState, useContext } from "react";
import TopicPage from "@/components/TopicPage";
import ChatPage from "@/components/ChatPage";
import HomePage from "@/components/HomePage";
import { NaviContext } from "@/components/Navi";
import LikePage from "@/components/LikePage";

const pages = [<TopicPage />, <ChatPage />, <LikePage />, <HomePage />];

export default function Page() {
  const { selected } = useContext(NaviContext);
  return pages[selected];
}
