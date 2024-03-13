"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function NextNprogress({ children }) {
  return (
    <>
      {children}
      <ProgressBar
        height="6px"
        color="#ffbe33"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
