import type { NextPage } from "next";
import Head from "next/head";
import MainHero from "../components/sections/MainHero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Manage Everything in a few clicks - exquisite </title>
        <meta name="description" content="Landing pages made easy..." />
      </Head>

      <main>
        <MainHero />
      </main>
    </>
  );
};


export default Home;
