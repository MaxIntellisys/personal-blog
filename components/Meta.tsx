import Head from "next/head";

export default function Meta({ title }: { title: string }) {
  return (
    <Head>
      {title ? <title>{title} | Max Sierra</title> : <title>Max Sierra</title>}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
