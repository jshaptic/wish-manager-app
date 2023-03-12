"use client";

import { Avatar } from "@material-tailwind/react";
import Wish from "./Wish";

export default function PersonPage() {
  return (
    <div>
      <Avatar src="/img/face-2.jpg" alt="avatar" variant="circular" />
      <h1 className="text-6xl mb-10">Person</h1>
      <h2 className="text-3xl mb-5">Wishes</h2>
      <div className="container space-y-2">
        <Wish />
        <Wish />
        <Wish />
        <Wish />
      </div>
    </div>
  );
}
