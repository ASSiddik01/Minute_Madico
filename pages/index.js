import Head from "next/head";
import Hero from "../sections/Hero";

export default function Home() {
  return (
    <div className={``}>
      <Head>
        <title>Minute Medico</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
