import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { sanityClient, usePreviewSubscription } from "../../lib/sanity";
import RenderSections from '../components/RenderSections.js'
import LeftRight from "../components/sections/LeftRight";

const homepageQuery = `*[_type == "homepage"][0]{
  title,
  "content": pageBuilder[]{
    _type != "statsAndTestimonials" => @,
    _type == "statsAndTestimonials" => {
      _key,
      _type,
      stats[]->{
        stat,
        statText
      },
      testimonials->{
         quote,
         company,
         author
      }
    },
    _type == "cards" => {
      cards[]{
        icons[][0],
        text,
        title
      }
    }
  }
}`

const Home: NextPage = ({ data, preview }: any) => {
  const { data: homepage } = usePreviewSubscription(homepageQuery, {
    params: { slug: '/' },
    initialData: data,
    enabled: preview,
  });

  const content = homepage.content

  // console.log(content)

  return (
    <>
      <Head>
        <title>Manage Everything in a few clicks - exquisite </title>
        <meta name="description" content="Landing pages made easy..." />
      </Head>
      <main>
        {content && <RenderSections sections={content} />}
        <LeftRight />
      </main>
    </>
  );
};


export default Home;



export const getStaticProps: GetStaticProps = async (context, preview = false) => {
  const homepage = await sanityClient.fetch(homepageQuery);

  return {
    props: {
      data: { homepage, content: homepage.content },
      preview
    }
  }
}