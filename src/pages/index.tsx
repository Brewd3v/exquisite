import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { sanityClient, usePreviewSubscription } from "../../lib/sanity";


import MainHero from "../components/sections/MainHero";

const homepageQuery = `*[_type == "homepage"][0]`

const Home: NextPage = ({ data, preview }) => {
  if (!data) return <div>Loading...</div>;
  const { data: homepage } = usePreviewSubscription(homepageQuery, {
    params: { slug: '/' },
    initialData: data,
    enabled: false,
  });

  return (
    <>
      <Head>
        <title>Manage Everything in a few clicks - exquisite </title>
        <meta name="description" content="Landing pages made easy..." />
      </Head>
      <main>
        <h1>{homepage.title}</h1>

        <MainHero />
      </main>
    </>
  );
};


export default Home;



export const getStaticProps: GetStaticProps = async (context, preview = false) => {
  const homepage = await sanityClient.fetch(homepageQuery);

  return {
    props: {
      data: { homepage },
      preview
    }
  }
}