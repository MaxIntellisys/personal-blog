import React from "react";
import Head from "next/head";

export default function Meta({ title }: { title: string }) {
  return (
    <Head>
      <title>{title} | Max Sierra</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
